import pandas as pd
import streamlit as st
import streamlit.components.v1 as components

st.set_page_config(layout="wide")


def make_dataframe_component(use_built: bool = False):
    if use_built:
        from dataframe import dataframe

        return dataframe

    _dataframe = components.declare_component("dataframe", url="http://localhost:3001")

    def dataframe(data, title: str = "", key=None):
        return _dataframe(data=data, title=title, key=key, default=pd.DataFrame())

    return dataframe


if __name__ == "__main__":
    use_built = st.checkbox("Use Built Component")
    dataframe = make_dataframe_component(use_built)
    raw_data = {
        "First Name": ["Jason", "Molly", "Tina", "Jake", "Amy"],
        "Last Name": ["Miller", "Jacobson", "Ali", "Milner", "Smith"],
        "Age": [42, 52, 36, 24, 73],
        "Long Text": [" ".join(["Lorem"] * 100)] * 5,
        "Image": ["<img src='https://picsum.photos/200' />"] * 5,
        "Audio": ["<audio src='https://wellsaidlabs.com/static/samples/actor-10.mp3' controls />"]
        * 5,
    }
    df = pd.DataFrame(raw_data, columns=list(raw_data.keys()))
    returned_df = dataframe(df, title="Test DataFrame")
