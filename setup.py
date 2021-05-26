import setuptools

setuptools.setup(
    name="streamlit-mui-datatable",
    version="0.0.1",
    author="Michael Petrochuk",
    author_email="michael@wellsaidlabs.com",
    description="A streamlit component wrapper over a Material-UI Datatable.",
    long_description="",
    long_description_content_type="text/plain",
    url="",
    packages=setuptools.find_packages(),
    include_package_data=True,
    classifiers=[],
    python_requires=">=3.6",
    install_requires=[
        "streamlit >= 0.63",
        "pandas",
    ],
)
