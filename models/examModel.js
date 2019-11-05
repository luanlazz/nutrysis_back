module.exports = app => {
    // Setup schema
    const examSchema = app.db.Schema({
        name: {
            type: String,
            required: true
        },
        priority: {
            type: Number
        },
        date: {
            type: Date
        },
        type: {
            type: String
        }
    });
    
    // Export Contact model
    const Exam = app.db.model('Exam', examSchema);

    return { Exam}
}
