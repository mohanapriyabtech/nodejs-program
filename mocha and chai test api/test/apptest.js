const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../index");

//Assertion Style
chai.should();

chai.use(chaiHttp);

describe('Tasks API', () => {

    /**
     * Test the GET route
     */
    describe("GET /api/tasks", () => {
        it("It should GET all the tasks", (done) => {
            chai.request(server)
                .get("/api/tasks")
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('array');
                    response.body.length.should.be.eq(3);
                done();
                });
        });

        it("It should NOT GET all the tasks", (done) => {
            chai.request(server)
                .get("/api/task")
                .end((err, response) => {
                    response.should.have.status(404);
                done();
                });
        });

    });


    /**
     * Test the GET (by id) route
     */
    describe("GET /api/tasks/:id", () => {
        it("It should GET a task by ID", (done) => {
            const taskId = 2;
            chai.request(server)                
                .get("/api/tasks/" + taskId)
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('object');
                    response.body.should.have.property('id');
                    response.body.should.have.property('name');
                    response.body.should.have.property('completed');
                    response.body.should.have.property('id').eq(2);
                done();
                });
        });

        it("It should NOT GET a task by ID", (done) => {
            const taskId = 123;
            chai.request(server)                
                .get("/api/tasks/" + taskId)
                .end((err, response) => {
                    response.should.have.status(404);
                    response.text.should.be.eq("The task with the provided ID does not exist.");
                done();
                });
        });

    });
    

    /**
     * Test the POST route
     */
    describe("POST /api/tasks", () => {
        it("It should POST a new task", (done) => {
            const task = {
                name: "MeanSTACK",
                completed: false
            };
            chai.request(server)                
                .post("/api/tasks")
                .send(task)
                .end((err, response) => {
                    
                    response.should.have.status(201);
                    response.body.should.be.a('object');
                    response.body.should.have.property('id').eq(4);
                    response.body.should.have.property('name').eq("MeanSTACK");
                    response.body.should.have.property('completed').eq(false);
                done();
                });
        });

       
    });


    /**
     * Test the PUT route
     */
    describe("PUT /api/tasks/:id", () => {
        it("It should PUT an existing task", (done) => {
            const taskId = 1;
            const task = {
                name: "Nodejs",
                completed: true
            };
            chai.request(server)                
                .put("/api/tasks/" + taskId)
                .send(task)
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('object');
                    response.body.should.have.property('id').eq(1);
                    response.body.should.have.property('name').eq("Nodejs");
                    response.body.should.have.property('completed').eq(true);
                done();
                });
        });

            
    });
    

    /**
     * Test the PATCH route
     */

    describe("PATCH /api/tasks/:id", () => {
        it("It should PATCH an existing task", (done) => {
            const taskId = 2;
            const task = {
                name: "IOS",
                completed:true
            };
            chai.request(server)                
                .patch("/api/tasks/" + taskId)
                .send(task)
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('object');
                    response.body.should.have.property('id').eq(2);
                    response.body.should.have.property('name').eq("IOS");
                    response.body.should.have.property('completed').eq(true);
                done();
                });
        });

          
    });
    

    /**
     * Test the DELETE route
     */
    describe("DELETE /api/tasks/:id", () => {
        it("It should DELETE an existing task", (done) => {
            const taskId = 2;
            chai.request(server)                
                .delete("/api/tasks/" + taskId)
                .end((err, response) => {
                    response.should.have.status(200);
                done();
                });
        });

        it("It should NOT DELETE a task that is not in the database", (done) => {
            const taskId = 145;
            chai.request(server)                
                .delete("/api/tasks/" + taskId)
                .end((err, response) => {
                    response.should.have.status(404);
                    response.text.should.be.eq("The task with the provided ID does not exist.");
                done();
                });
        });

    });




});