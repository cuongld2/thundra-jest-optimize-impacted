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