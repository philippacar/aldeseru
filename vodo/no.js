// Assuming model and type are defined somewhere earlier in your code

// Example model object structure
const model = {
    config: {
        selection: {
            type1: {
                option1: 'value1',
                option2: 'value2'
            },
            type2: {
                option1: 'value3',
                option2: 'value4'
            }
            // Other types...
        }
    }
};

// Assuming type is defined somewhere earlier or passed as an argument
const type = 'type2';

// Accessing and assigning the configuration based on type
const cfg = model.config.selection[type];

console.log(cfg); // Outputs { option1: 'value3', option2: 'value4' }
