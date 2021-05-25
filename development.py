import pandas as pd
import streamlit as st
import streamlit.components.v1 as components


def make_dataframe_component(use_built: bool = False):
    if use_built:
        from dataframe import dataframe

        return dataframe

    _dataframe = components.declare_component("dataframe", url="http://localhost:3001")

    def dataframe(data, key=None):
        return _dataframe(data=data, key=key, default=pd.DataFrame())

    return dataframe


if __name__ == "__main__":
    use_built = st.checkbox("Use Built Component")
    dataframe = make_dataframe_component(use_built)
    raw_data = {
        "First Name": ["Jason", "Molly", "Tina", "Jake", "Amy"],
        "Last Name": ["Miller", "Jacobson", "Ali", "Milner", "Smith"],
        "Age": [42, 52, 36, 24, 73],
    }
    df = pd.DataFrame(raw_data, columns=["First Name", "Last Name", "Age"])
    returned_df = dataframe(df)
    if not returned_df.empty:
        st.table(returned_df)
