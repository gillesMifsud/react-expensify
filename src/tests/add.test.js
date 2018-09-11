const add = (a, b) => a + b;
const generateGreetig = (name = 'Anonymous') => `Hello ${name} !`;

test('should add 2 numbers', () => {
    const result = add(3, 4);
   
    expect(result).toBe(7)
});

test('Should return Hello (name) !', () => {
    const result = generateGreetig('Yin');
    expect(result).toBe('Hello Yin !');
});

test('Should return Hello Anonymous !', () => {
    const result = generateGreetig();
    expect(result).toBe('Hello Anonymous !');
});