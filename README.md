# Streamlit Datatable Component

This repo contains a basic implementation of a Streamlit Datatable.

## Installation

TODO

## Contributing

### Prerequisites

1. Ensure you have [Python 3.6+](https://www.python.org/downloads/), [Node.js](https://nodejs.org),
   and [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) installed.

2. Clone this repo.

3. Initialize the component frontend:

   ```bash
   $ cd datatable/frontend
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
   $ npm run build  # Start the Webpack dev server
   ```

## More Information

* [Streamlit Components documentation](https://docs.streamlit.io/en/stable/streamlit_components.html)
* [Streamlit Forums](https://discuss.streamlit.io/tag/custom-components)
* [Streamlit Components gallery](https://www.streamlit.io/components)
