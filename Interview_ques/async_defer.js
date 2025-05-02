/*
Async and Defer attribute in script--
1. When browser loads a web page
-- HTML parsing
-- script tag are downloaded /fetched
-- Scripts are executed when available
    
 */

<>
  {/* ## 1. Normal */}
  <script src=''></script>
  {/* Parsing ---fetching --exceuting --parsing again */}
  {/* 2. Async */}
  <script async src=''></script>
  {/* Parsing--executing--parsing again 
          --fetching 
          */}
  {/* 3. Defer */}
  <script defer src=''></script>
  {/*  Parsing -------executing 
       fetching
  */}
</>;


// Prefer defer as for async one it doesn;t guarantee that script will be downloaded in order
