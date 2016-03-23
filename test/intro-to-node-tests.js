var assert = require("assert"),
    fileExecutor = require("../utils/file-executor");

describe('Hello World!', function(){
    it('should write Hello World! to the console', function(done){

            fileExecutor.execute("hello.js", function (err, records){
                if(err){
                    console.log(err);
                    assert.ok(false, err);
                }
                else {
                    assert.equal("hello world!", records[0]);
                }
                done();
            });

    });
});


describe('Filter data!', function(){
    it('should only print equal numbers', function(done){

        fileExecutor.execute("filter-numbers.js", function (err, records){
            if(err){
                console.log(err);
                assert.ok(false, err);
            }
            else {
                assert.deepEqual("[ 4, 8, 22, 84, 94 ]", records[0]);
            }
            done();
        });

    });
});

describe('Users', function(){
    it('should be printed to the screen', function(done){

        fileExecutor.execute("users.js", function (err, records){
            if(err){
                console.log(err);
                assert.ok(false, err);
            }
            else {
                assert.equal("Hi, Jack Bradshaw!", records[0]);
                assert.equal("Hi, Callum Bradshaw!", records[1]);
                assert.equal("Hi, Neil Bradshaw!", records[2]);
            }
            done();
        });

    });
});
