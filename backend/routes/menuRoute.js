import express from "express";
import { Menu } from '../models/menuModel.js';

const router = express.Router();


// Save new menu
router.post('/', async (request, response) => {
    try {
        if (
            !request.body.description ||
            !request.body.size ||
            !request.body.price ||
            !request.body.category
        ) {
            return response.status(400).send({
                message: 'Send all required fields: description, size, price, category',
            });
        }

        const newMenu = {
            description: request.body.description,
            size: request.body.size,
            price: request.body.price,
            category: request.body.category,
        }

        const menu = await Menu.create(newMenu); //create menu

        return response.status(201).send(menu); //return response 201 after finish
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

//Get all menu from database
router.get('/', async (request, response) => {
    try {
        const allMenu = await Menu.find({});
        return response.status(200).json({
            count: allMenu.length,
            data: allMenu
        });

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

//Get menu by ID - colon used for finding
router.get('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const allMenu = await Menu.findById(id); //find by ID
        return response.status(200).json({
            count: allMenu.length,
            data: allMenu
        });

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

//Update an item in the menu
router.put('/:id', async (request, response) => {
    try {

        if (
            !request.body.description ||
            !request.body.size ||
            !request.body.price ||
            !request.body.category
        ) {
            return response.status(400).send({
                message: 'Send all required fields: description, size, price, category',
            });
        }
        const { id } = request.params;
        const result = await Menu.findByIdAndUpdate(id, request.body);

        if (!result) {
            return response.status(400).json({ message: 'Item not found' });
        }

        return response.status(200).send({
            message: 'Item updated successfully',
        })

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

//Delete an item in the menu using ID
router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const result = await Menu.findByIdAndDelete(id);

        if (!result) {
            return response.status(404).json({ message: 'Item not found' });
        }

        return response.status(200).send({ message: 'Item successfully deleted' });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

export default router;