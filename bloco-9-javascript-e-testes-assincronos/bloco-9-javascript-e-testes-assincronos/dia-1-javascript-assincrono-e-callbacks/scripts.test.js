const uppercase = require('../dia-1-javascript-assincrono-e-callbacks/scripts')

describe('verifique a chamada da função uppercase', () => {
  it('verificar', () => {
    uppercase('teste', (qualquer) => {
      try {
        expect(qualquer).toEqual('TESTE');
        done();
      } catch(error) {
        done()
      }
    })
  })
})