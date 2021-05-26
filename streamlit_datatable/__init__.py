import os

import pandas as pd
import streamlit.components.v1 as components

parent_dir = os.path.dirname(os.path.abspath(__file__))
build_dir = os.path.join(parent_dir, "frontend/build")
assert os.path.exists(build_dir)
_component_func = components.declare_component("st_datatable", path=build_dir)


def st_datatable(data, title: str = "", key=None):
    component_value = _component_func(data=data, title=title, key=key, default=pd.DataFrame())
    return component_value
