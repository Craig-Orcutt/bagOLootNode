'use strict'
const {assert: {equal, isFunction, isObject, isArray}} = require('chai');
const { addLoot } = require('../lib/addToBag');


describe('add loot to bag', ()=>{
    describe('addLoot function', ()=>{
        it('should be a function', ()=>{
            isFunction(addLoot);
        })
    })
})