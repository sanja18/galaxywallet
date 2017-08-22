'use strict';
var nodes = function() {}
nodes.customNode = require('./nodeHelpers/customNode');
nodes.nodeTypes = {
    DBIX: "DBIX",
    Custom: "CUSTOM DBIX"
};
nodes.ensNodeTypes = [];
nodes.customNodeObj = {
    'name': 'CUS',
    'blockExplorerTX': '',
    'blockExplorerAddr': '',
    'type': nodes.nodeTypes.Custom,
    'eip155': false,
    'chainId': '5',
    'tokenList': [],
    'abiList': [],
    'estimateGas': false,
    'service': 'Custom',
    'lib': null
};
nodes.nodeList = {
    'dbix_galaxy': {
        'name': 'DBIX',
        'blockExplorerTX': 'http://dbixscan.io/tx/[[txHash]]',
        'blockExplorerAddr': 'http://dbixscan.io/addr/[[address]]',
        'type': nodes.nodeTypes.DBIX,
        'eip155': true,
        'chainId': 5,
        'tokenList': require('./tokens/dbixTokens.json'),
        'abiList': require('./abiDefinitions/dbixAbi.json'),
        'estimateGas': true,
        'service': 'Arabiancha.in',
        'lib': new nodes.customNode('https://rpc.arabiancha.in', '')
    }
};
nodes.ethPrice = require('./nodeHelpers/ethPrice');
module.exports = nodes;
