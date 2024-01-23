import mysql from "mysql2";

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Vineeth@123",
    database:"userdb",
   
});

export const getUsers=async(req,res)=>{
    try {

        pool.query("SELECT * FROM users",(err,result)=>{
            if(result){
                res.status(200).json({users:result})
            }
            if(err){
                res.status(400).json({message:"error while geting data from database",error:err});
            }
        })
        
    } catch (error) {
        res.status(500).json({message:"Error",error:error});
    }

}

export const addUser=async(req,res)=>{
    try {
        const name=req.body.name;
    const age=req.body.age;
    pool.query("INSERT INTO users(name,age) VALUES (?,?)",[name,age],(err,result)=>{
        if(result){
            res.status(200).json({message:"user added",result:result});
        }
        if(err){
            res.status(400).json({message:"Error while adding user",error:err});
        }
    })
        
    } catch (error) {
        res.status(500).json({message:"Error while adding user",error:error});
        
    }

}

export const updateUser=async (req,res)=>{

    try {
        const newName=req.body.newName;
        const id=req.params.id;
        console.log(`id ${id} ${typeof(id)}`)
        pool.query("UPDATE users SET name=? WHERE id=?",[newName,id],(err,result)=>{
            if(result){
                res.status(201).json({message:"name updated",result:result});
            }
            if(err){
                res.status(400).json({message:"Error while updating user name",error:err});
            }
        })
    } catch (error) {
        res.status(500).json({message:"Error while updting user",error:error});
    }
}

export const deleteUser=async(req,res)=>{
    try {
        const id =req.params.id;
        pool.query("DELETE FROM users WHERE id=?",[id],(err,result)=>{
            if(result){
                res.status(200).json({message:"user deleted",result:result});
            }
            if(err){
                res.status(400).json({message:"Error while deleting user",error:err});
            }
        })
        
    } catch (error) {
        res.status(500).json({message:"Error while deleting user",error:error});
        
    }
}

