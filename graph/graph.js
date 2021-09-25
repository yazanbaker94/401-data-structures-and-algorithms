const Vertex = require('./vertex');
const Edge = require('./edge');

// using Adjacency List way
class Graph {
    constructor() {
        this.adjacencyList = new Map();
    }

    addVertex(vertex) {
        this.adjacencyList.set(vertex, []);
    }

    addNode(node) {
        this.adjacencyList.set(node, []);
      }

      addEdge(startVertex, endVertex) {
        let weight = 0;
        if (!this.adjacencyList.has(startVertex)) {
          throw new Error('the graph has no vertex');
        }
        const adjacencies = this.adjacencyList.get(startVertex);
        adjacencies.push(new Edge(endVertex, weight));
      }

      getAllNodes() {
        let result = [];
            for (const [node, edge] of this._adjacencyList.entries()) {
             result.push(node);
            }
            return result;
      }


    addDirectedEdge(start, end, weight) {
        if (!this.adjacencyList.has(start) || !this.adjacencyList.has(end)) {
            console.log("VERTEX DOES NOT EXIST");
            return;
        }
        // they exist
        const adjacencies = this.getNeighbours(start) // get me the neighbours of start
        adjacencies.push(new Edge(end, weight));
    }

    getNeighbours(vertex) {
        if (!this.adjacencyList.has(vertex)) {
            console.log("vertex does not exist")
            return;
        }
        return this.adjacencyList.get(vertex);
    }

    size(node) {
        const queue = [];
        const nodes = new Set();
    
        queue.unshift(node);
        nodes.add(node);
        
        while (queue.length) {
          const currentNode = queue.pop();
          const neighbors = this.getNeighbours(currentNode);
    
          for (let neighbor of neighbors) {
            const neighborNodes = neighbor.vertex;
    
            if (nodes.has(neighborNodes)) {
              continue;
            } else {
              nodes.add(neighborNodes);
              queue.unshift(neighborNodes);
            }
          }
        }
        return nodes.size;
      }
    }
    

const myGraph = new Graph();
const zero = new Vertex(0);
const one = new Vertex(1);
const two = new Vertex(2);
const three = new Vertex(3);
const four = new Vertex(4);
const five = new Vertex(5);

myGraph.addVertex(zero);
myGraph.addVertex(one);
myGraph.addVertex(two);
myGraph.addVertex(three);
myGraph.addVertex(four);
myGraph.addVertex(five);

myGraph.addDirectedEdge(zero, two);
myGraph.addDirectedEdge(two, four);
myGraph.addDirectedEdge(two, three);
myGraph.addDirectedEdge(four, five);
myGraph.addDirectedEdge(one, three);
myGraph.addDirectedEdge(five, three);

console.log("------ neighbours of 2------")
console.log(myGraph.getNeighbours(two));

for (const [k,v] of myGraph.adjacencyList.entries()) {
    console.log("k = ", k, " v =", v);
}




module.exports = {
    Vertex,
    Edge,
    Graph
  };