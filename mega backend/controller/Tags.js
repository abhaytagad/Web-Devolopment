const Tag = require('../model/Tag')

exports.createTag = async(req,res)=>{

    try{
        const{name,description} = req.body;

        if (!name || !description){
            res.status(400).json({

                success:false,
                message:"please provide all details"
            })
        }

        const createdTag = await Tag.create({name:name,description:description})
        res.status(200).json({

            success:false,
            message:"created tag"
        })

    }
    catch(e){
        res.status(400).json({

            success:false,
            message:"failed to create tag"
        })
    }
}



exports.getAllTags = async(req,res)=>{

    try{
        const allTags = await Tag.find({});

       
        res.status(200).json({

            success:false,
            message:"All tag returned"
        })

    }
    catch(e){
        res.status(400).json({

            success:false,
            message:"failed to return tags"
        })
    }
}