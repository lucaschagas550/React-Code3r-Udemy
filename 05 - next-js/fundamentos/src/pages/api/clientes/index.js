export default function client(req, res){
    //res.status(200).send(); //Send precisa para que seja feito o envio da respota do servidor ao cliente, se nao precisa do json
    
    if(req.method === "GET"){
        handleGet(req,res);
    }else{
        res.status(405).send();
    }
}

function handleGet(req, res){
    res.status(200).json({
        id: 3,
        nome: 'Maria',
        idade: 33,
    });
}