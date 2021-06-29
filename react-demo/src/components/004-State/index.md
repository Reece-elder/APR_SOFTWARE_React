# State

State is data that can *change*
All components that rely on this data recieve it as *props*

Data is uni directional:
 Parent -> Child - GOOD

 Child -> Parent - BAD

 State is stored in the highest common component

 # Where does state exist? 

 1) Identify every component that relies on state
 2) Find a common owner component
 3) If no common component exists, create a new one to hold state