// NOTE: `ThemeProvider` implementation was initially borrowed from:
// https://github.com/whitphx/streamlit-webrtc/blob/master/streamlit_webrtc/frontend/src/ThemeProvider.tsx
import {
  createMuiTheme,
  ThemeProvider as MuiThemeProvider
} from "@material-ui/core/styles";
import chroma from "chroma-js";
import React from "react";
import { Theme } from "streamlit-component-lib";

interface StreamlitThemeProviderProps {
  theme: Theme | undefined;
}

export const ThemeProvider: React.VFC<
  React.PropsWithChildren<StreamlitThemeProviderProps>
> = (props) => {
  const stTheme = props.theme;

  const muiTheme = React.useMemo(() => {
    if (stTheme == null) {
      return undefined;
    }

    const textColorScale = chroma
      .scale([stTheme.textColor, stTheme.backgroundColor])
      .mode("lab");

    return createMuiTheme({
      palette: {
        primary: {
          main: stTheme.primaryColor,
        },
        action: {
          active: stTheme.textColor,
          hover: textColorScale(0.5).hex(),
          selected: stTheme.primaryColor,
          disabled: textColorScale(0.5).hex(),
        },
        background: {
          default: stTheme.backgroundColor,
          paper: stTheme.secondaryBackgroundColor,
        },
        text: {
          primary: stTheme.textColor,
          secondary: textColorScale(0.1).hex(),
          disabled: textColorScale(0.5).hex(),
        },
      },
      typography: {
        fontFamily: stTheme.font,
      },
    });
  }, [stTheme]);

  if (muiTheme == null) {
    return <>{props.children}</>;
  }

  return <MuiThemeProvider theme={muiTheme}>{props.children}</MuiThemeProvider>;
};

export default ThemeProvider;
