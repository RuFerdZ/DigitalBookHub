function calculateReadingTime(pages, readingSpeed = 200) {
  // Assuming average reading speed is 200 words per minute
  // Adjust the reading speed according to the reader's pace

  // Assuming an average of 250 words per page (adjust as needed)
  const wordsPerPage = 250;

  // Calculate total words in the book
  const totalWords = pages * wordsPerPage;

  // Calculate reading time in minutes
  const readingTimeInMinutes = totalWords / readingSpeed;

  // Round up to the nearest minute
  const roundedReadingTime = Math.ceil(readingTimeInMinutes);

  return roundedReadingTime;
}
export { calculateReadingTime };
