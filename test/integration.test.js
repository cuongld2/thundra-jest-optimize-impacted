const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const app = require('../server');
const should = chai.should();
const expect = chai.expect;
// starwars mocks
const starwarsFilmListMock = require('../mocks/starwars/film_list.json');
const starwarsANewHopeFilmMock = require('../mocks/starwars/a_new_hope_film.json');
const starwarsLukeSkywalkerPeopleMock = require('../mocks/starwars/luke_skywalker.json');
const starwarsTattoinePlanetMock = require('../mocks/starwars/tattoine.json');
const starwarsStarshipMock = require('../mocks/starwars/cr90_corvette.json');
const starwarsVehicleMock = require('../mocks/starwars/sand_crawler.json');
const starwarsSpeciesMock = require('../mocks/starwars/human.json');

describe('GET /films-list-update', function ()  {
  it('should return a list of films when called', async function () {
    const response = await chai
      .request(app)
      .get('/films-list-update');
      expect(response.status).to.equal(200);
      expect(response.body).to.deep.equal(starwarsFilmListMock);
      
      // .end((err, res) => {
      //   res.should.have.status(200);
      //   expect(res.body).to.deep.equal(starwarsFilmListMock);
      // });
  });
});

describe('GET /film/:episode', function () {
  it('should return film information for A New Hope Episode 4 when called', async function () {
    const episode = '4';
    const res = await chai
      .request(app)
      .get('/film/' + episode);
      expect(res.status).to.equal(200);
        expect(res.body).to.deep.equal(starwarsANewHopeFilmMock);
    
      
  });
});

describe('GET /people/:id', function () {
  it('should return people information for Luke Skywalker when called', async function () {
    const peopleId = '1';
    const res = await chai
      .request(app)
      .get('/people/' + peopleId);
    
      expect(res.status).to.equal(200);
        expect(res.body).to.deep.equal(starwarsLukeSkywalkerPeopleMock);
      
      
  });
});

describe('GET /planet/:id', function () {
  it('should return planet information for Tattoine when called', async function () {
    const planetId = '1';
    const res = await chai
      .request(app)
      .get('/planet/' + planetId);
      expect(res.status).to.equal(200);
        expect(res.body).to.deep.equal(starwarsTattoinePlanetMock);
       
  });
});

describe('GET /starship/:id', function () {
  it('should return starship information when called', async function() {
    const starshipId = '2';
    const res = await chai
      .request(app)
      .get('/starship/' + starshipId);
      
      expect(res.status).to.equal(200);
        expect(res.body).to.deep.equal(starwarsStarshipMock);
        
      
  });
});

describe('GET /vehicle/:id', function ()  {
  it('should return vehicle information when called', async function()  {
    const vehicleId = '4';
    const res = await chai
      .request(app)
      .get('/vehicle/' + vehicleId);
      expect(res.status).to.equal(200);
        expect(res.body).to.deep.equal(starwarsVehicleMock);

  });
});

describe('GET /species/:id', function ()  {
  it('should return species information when called', async function() {
    const speciesId = '1';
    const res = await chai
      .request(app)
      .get('/species/' + speciesId);
      expect(res.status).to.equal(200);
        expect(res.body).to.deep.equal(starwarsSpeciesMock);
  });
});
