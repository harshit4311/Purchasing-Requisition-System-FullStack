const { Item } = require('../models');

const itemController = {
  // Get all items
  async getAllItems(req, res) {
    try {
      const items = await Item.findAll();
      res.json(items);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Get item by ID
  async getItemById(req, res) {
    try {
      const item = await Item.findByPk(req.params.id);
      if (item) {
        res.json(item);
      } else {
        res.status(404).json({ error: 'Item not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Create a new item
  async createItem(req, res) {
    try {
      const newItem = await Item.create(req.body);
      res.status(201).json(newItem);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Update an item
  async updateItem(req, res) {
    try {
      const [updated] = await Item.update(req.body, {
        where: { id: req.params.id }
      });
      if (updated) {
        const updatedItem = await Item.findByPk(req.params.id);
        res.json(updatedItem);
      } else {
        res.status(404).json({ error: 'Item not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Delete an item
  async deleteItem(req, res) {
    try {
      const deleted = await Item.destroy({
        where: { id: req.params.id }
      });
      if (deleted) {
        res.status(204).json({ message: 'Item deleted' });
      } else {
        res.status(404).json({ error: 'Item not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = itemController;
