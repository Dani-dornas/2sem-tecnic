class x{
    um(){
        console.log("um");
    }
}

class y extends x{
    dois(){
        super.um();
        console.log("dois");
    }
}

class z extends y{
    tres(){
        super.dois();
        console.log("tres");
    }
}

