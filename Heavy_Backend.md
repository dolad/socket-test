# Take Home Assignment #1:

## Heavy backend

1. The solution should be a working web application including backend and frontend that allows user to make specific calculations, potentially long in time.

   It should contain two parts:

   - Frontend, which displays an input and a button to send the input to the server. User can enter any keccak256* hash and send it to the server for calculation. It should also have UI to display the calculation results.
   - Backend, should find keccak256 that is lower than entered by user and send it back along with nounce** for displaying. Calculation should be done in the following way:

   newHash = keccak256(inputHash + nounce)

   Please, take into account that calculation may take a day to come to result, depending on the input

   The problem is not complex enough to demonstrate all you talents for sure, we know. But we will be happy to see modern and harmonious solution. Question yourself:

   - How would you test the solution?
   - How to make UI interactive?
   - How to develop it so other developers will enjoy supporting it?

   \* keccak256 — [hashing algorithm](https://en.wikipedia.org/wiki/SHA-3), widely used in the blockchain

   ** nounce — any random number

1. Before the second part(online interview)
   - Think about challenges the system will face in scale. How would you resolve them?
   - What cloud services are suitable for such purposes?
   - What frameworks would you suggest to use for interactive applications with heavy client-server communication?
   - How would you modify the app to calculate the hashes directly on the frontend without lost in responsiveness?


