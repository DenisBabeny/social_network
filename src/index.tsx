import React from 'react';
import './index.css';
import {renderEntireTree} from "./Render";
import {store} from "./Redax/state";

renderEntireTree()
store.subscribe(renderEntireTree);


