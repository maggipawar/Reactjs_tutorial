import { useEffect } from "react";

export function User(props) {

  useEffect(()=>{
    console.log('useEffect called');
  },[props.count,props.data])
  return (
    <div>
    <h1>App {props.count} {props.data}</h1>
    </div>
  );
}

export default User;
