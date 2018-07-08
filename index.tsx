import * as React from "react";
import * as ReactDOM from "react-dom";
import {Provider} from "react-redux";
import configureStore from "./src/store/store"
import App from "./src/components/App"

const store = configureStore();

ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>,
    document.getElementById("root")
);