import React from 'react';
import './index.css';
import {renderEntireTree} from "./Render";
import {store} from "./Redux/redux-store";
renderEntireTree()
store.subscribe(renderEntireTree);


