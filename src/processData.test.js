import { processData } from './processData';

test('it calls the callback with the processed data', () => {
    const mockCallBack = jest.fn();

    const inputData = ['apple', 'banana', 'cherry'];

    processData(inputData, mockCallBack); 
    // why put the input and mockCallBack in the function? because the function takes in two arguments
    // ick the process data function with the input data and the mock callback

    expect(mockCallBack).toHaveBeenCalledTimes(1);
    expect(mockCallBack).toHaveBeenCalledWith(['APPLE', 'BANANA', 'CHERRY']);
});