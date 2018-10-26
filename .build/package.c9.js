define("plugins/c9/package.c9", [], {
    "name": "c9",
    "description": "New Cloud9 Client",
    "version": "3.1.3558",
    "author": "Ajax.org B.V. <info@ajax.org>",
    "private": true,
    "main": "bin/c9",
    "repository": {
        "type": "git",
        "url": "http://github.com/c9/core.git"
    },
    "dependencies": {
        "acorn": "2.5.2",
        "async": "^0.9.0",
        "base64id": "~0.1.0",
        "connect": "~2.12.0",
        "debug": "~0.7.4",
        "ejs": "~1.0.0",
        "emmet": "git+https://github.com/cloud9ide/emmet-core.git#2ff6dc06ad",
        "engine.io": "1.6.9",
        "engine.io-client": "1.6.9",
        "jsonm": "1.0.6",
        "http-error": "~0.0.5",
        "less": "^2.4.0",
        "mime": "~1.2.9",
        "mkdirp": "~0.3.5",
        "msgpack-js-browser": "~0.1.4",
        "nak": "git+https://github.com/cloud9ide/nak.git#6deef931594",
        "netutil": "~0.0.2",
        "optimist": "~0.6.0",
        "qs": "0.6.6",
        "rusha": "^0.8.3",
        "send": "~0.1.4",
        "simple-mime": "~0.0.8",
        "tern": "git+https://github.com/cloud9ide/tern.git#39015d544d4c00c7899fea4c95c2e5bc2720e68e",
        "tern_from_ts": "git+https://github.com/cloud9ide/tern_from_ts.git#84d51dcb9b16b126a206789d4d4237cde2801fe4",
        "through": "2.2.0",
        "tmp": "~0.0.20",
        "uglify-js": "~2.6.2",
        "ws": "1.0.1",
        "read": "~1.0.5",
        "form-data": "~0.2.0",
        "chai": "~1.5.0",
        "mocha": "1.8.2"
    },
    "scripts": {
        "start": "node server.js"
    },
    "devDependencies": {},
    "licenses": [],
    "bundledDependencies": [
        "ace",
        "ace_tree",
        "amd-loader",
        "architect",
        "architect-build",
        "msgpack-js",
        "c9"
    ],
    "c9": {
        "plugins": []
    }
});
