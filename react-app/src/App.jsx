function Student ({name ,cgpa}){
  let result ;
  if(cgpa>=8.5)
    result="Excelent";
  else if(cgpa>=7.5)
    result="Need improvement";
  else {
    result="you need to improve";
}
return (
  <>
  <h2>name:{name}</h2>
  <h2>cgpa:{cgpa}</h2>
  <h2>performance:{result}</h2>
  </>
);
}


 function App(){
  return(
    <>
    <Student name="subha" cgpa={8.6}/>
     <Student name="rohit" cgpa={7.5}/>
    </>
  );
}

export default App;