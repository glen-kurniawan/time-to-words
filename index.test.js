const  { convertTimeToWords } = require('./index');

describe('Time to words', () => {
  it('Handles midnight', () => {
    const timeInWords = convertTimeToWords('0:00');
    expect(timeInWords).toBe('midnight');
  });

  it('Handles 30 - 8:30', () => {
    const timeInWords = convertTimeToWords('8:30');
    expect(timeInWords).toBe('half past eight');
  });

  it('Handles times after 30 mins - 2:45', () => {
    const timeInWords = convertTimeToWords('2:45');
    expect(timeInWords).toBe('quarter to three');
  });

  it('Handles times before 15 mins - 2:11', () => {
    const timeInWords = convertTimeToWords('2:11');
    expect(timeInWords).toBe('eleven past two');
  });

  it('Handles times after 15 mins - 2:16', () => {
    const timeInWords = convertTimeToWords('2:16');
    expect(timeInWords).toBe('sixteen past two');
  });

  it('Handles times after 30 mins - 2:50', () => {
    const timeInWords = convertTimeToWords('2:50');
    expect(timeInWords).toBe('ten to three');
  });

  it('Handles times after 30 mins - 2:37', () => {
    const timeInWords = convertTimeToWords('2:37');
    expect(timeInWords).toBe('twenty-three to three');
  });
});
