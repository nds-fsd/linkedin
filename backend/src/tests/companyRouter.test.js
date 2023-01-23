const supertest = require('supertest');
const {app, server} = require('../index');
const fakeRequest = supertest(app);
const {connectDB, disconnectDB} = require('../database');



describe('Company router TEST', () => {
    beforeAll(async () => {
        const connectionError = await connectDB();
        if(!connectionError) console.log('🏢 Connected to database!');
        else console.log(connectionError);
    });
    afterAll(async () => {
        await disconnectDB();
        server.close();
    });


    let company;
    describe('POST /company', () => {
        it('Can create company', async () => {
            const res = await fakeRequest.post('/company').send( {
                name: 'company test'
            });
            expect(res.status).toBe(201);
            expect(res.body.name).toBe('company test');
            expect(res.body._id).not.toBe(undefined);
            company = res.body;
        });
    });
});
