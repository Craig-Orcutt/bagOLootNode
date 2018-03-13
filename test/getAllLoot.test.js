
'use strict'
const {assert: {equal, isFunction, isObject, isArray, deepEqual}} = require('chai');
const { getAllLoot } = require('../lib/getAllLoot');

describe('get all loot module', () => {
    describe('getAllLoot Function', ()=>{
        it('should be a function',()=>{
            isFunction(getAllLoot);
        })
        it('should return an array',()=>{
            return getAllLoot()
            .then((data)=>{
                isArray(data);
                isObject(data[0]);

            })
        })
        // it('should return an array of obj')
    })
})

