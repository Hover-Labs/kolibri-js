/**
 * Sleep the program for the given number of seconds.
 *
 * @param seconds The number of seconds to sleep for.
 */
const sleep = async (seconds: number): Promise<void> => {
  const milliseconds = seconds * 1000
  return new Promise((resolve) => setTimeout(resolve, milliseconds))
}

export default sleep
