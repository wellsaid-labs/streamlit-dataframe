# Streamlit Datatable Component

This repo contains a basic implementation of a Streamlit Datatable using the
[MUI Datatable](https://github.com/gregnb/mui-datatables) under the hood.

<div align="center">
	<img src="https://user-images.githubusercontent.com/19170080/38026128-eac9d506-3258-11e8-92a7-b0d06e5faa82.gif" />
</div>

## Installation

TODO

## Contributing

### Prerequisites

1. Ensure you have [Python 3.6+](https://www.python.org/downloads/), [Node.js](https://nodejs.org),
   and [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) installed.

2. Clone this repo.

3. Initialize the component frontend:

   ```bash
   $ cd streamlit_datatable/frontend
   $ npm install    # Install npm dependencies
   ```

4. In another terminal, create a new Python virtual environment:

   ```bash
   $ python3 -m venv venv
   $ . venv/bin/activate
   $ python -m pip install -r requirements.txt
   ```

### Developing

1. Run the component frontend:

   ```bash
   $ npm run start  # Start the Webpack dev server
   ```

2. Run the streamlit development app:

   ```bash
   $ python -m streamlit run development.py
   ```

### Building

1. Build the component frontend:

   ```bash
   $ npm run build
   ```

## More Information

* [Streamlit Components documentation](https://docs.streamlit.io/en/stable/streamlit_components.html)
* [Streamlit Forums](https://discuss.streamlit.io/tag/custom-components)
* [Streamlit Components gallery](https://www.streamlit.io/components)
