module.exports = (sequelize, Sequelize) => {
    const Dialogue = sequelize.define('Dialogue', {
        id: {
            field: 'dialogue_id',
            type: Sequelize.UUID,
            allowNull: false,
            primaryKey: true
        },
        content: {
            field: 'content',
            type: Sequelize.JSONB
        },
        name: {
            field: 'name',
            allowNull: false,
            type: Sequelize.STRING,
        },
        description: {
            field: 'description',
            type: Sequelize.TEXT,
        }
    });
    return Dialogue;
}