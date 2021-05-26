import random

import pandas as pd
import streamlit as st
import streamlit.components.v1 as components

st.set_page_config(layout="wide")


def make_datatable_component(use_built: bool = False):
    """Make a streamlit datatable component.

    Args:
        use_built: Use the production datatable files instead of the development server.
    """
    if use_built:
        from streamlit_datatable import st_datatable

        return st_datatable

    _st_datatable = components.declare_component("st_datatable", url="http://localhost:3001")

    def st_datatable(data, title: str = "", key=None):
        return _st_datatable(data=data, title=title, key=key, default=pd.DataFrame())

    return st_datatable


if __name__ == "__main__":
    st.title("Streamlit Datatable")
    st.write("This streamlit app is used for testing the `st_datatable` component.")
    use_built = st.checkbox("Use Built Component")
    st_datatable = make_datatable_component(use_built)
    num_rows = 5
    data = {
        "First Name": ["Jason", "Molly", "Tina", "Jake", "Amy"],
        "Last Name": ["Miller", "Jacobson", "Ali", "Milner", "Smith"],
        "Age": [42, 52, 36, 24, 73],
        "Long Text": [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
            "Aliquam molestie, neque sit amet eleifend rhoncus, justo "
            "lorem interdum mi, vel blandit sapien dolor non nunc. "
            "Fusce eget accumsan magna. Vestibulum vulputate nulla sit amet "
            "pretium feugiat. Maecenas eget orci ut quam posuere congue."
        ]
        * num_rows,
        "Image": [
            f"<img src='https://picsum.photos/{random.randint(100, 500)}' />"
            for _ in range(num_rows)
        ],
        "Audio": ["<audio src='https://wellsaidlabs.com/static/samples/actor-10.mp3' controls />"]
        * num_rows,
    }
    st_datatable(pd.DataFrame(data), title="Streamlit Datatable")
