const bfs = require('../graph');
const Edge = require('../graph').Edge;
const Vertex = require('../graph').Vertex;


describe('BFS graph', () => {
    it('BFS', () => {
     

        expect(bfs('PHX')).toEqual('BFS found Bangkok!');
    });

    
});