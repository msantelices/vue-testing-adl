import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  const wrapper = shallowMount(HelloWorld)

  // it('renders props.msg when passed', () => {
  //   const msg = 'new message'
  //   const wrapper = shallowMount(HelloWorld, {
  //     propsData: { msg }
  //   })
  //   expect(wrapper.text()).toMatch(msg)
  // })

  test('Renderiza la prop msg dentro de un h1', ()=> {
    const msg = 'Mensaje de prueba'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })

    // Seleccionar elemento h1
    const h1 = wrapper.find('h1')
    expect(h1.text()).toBe(msg)
  })


  test('El componente debe contener un elemento ul', ()=> {
    const ul = wrapper.find('ul')

    // Verificar que el elemento exista
    expect(ul.exists()).toBe(true)
  })


  test('El componente debe contener un elemento ul con la clase lista', ()=> {
    const ul = wrapper.find('ul.lista')

    expect(ul.exists()).toBe(true)
  })


  test('El componente debe contener 3 elementos ul', ()=> {
    const ul = wrapper.findAll('ul') // Devuelve un arreglo

    expect(ul.length).toBe(3)
  })


  test('La clase show solo debe agregarse a su ul si la variable show es True', async()=> {
    // Set data - Definimos valores de nuestro campo data() en el componente - Marcar funcion como async
    await wrapper.setData({
      show: false
    })

    const ul = wrapper.find('ul.show')

    expect(ul.exists()).toBe(false)

  })


  test('El método addValues debe retornar la suma de sus argumentos', ()=> {
    const a = 1
    const b = 2

    // Accediendo a wrapper.vm tenemos acceso a metodos y computed
    expect( wrapper.vm.addValues(a, b) ).toBe(3)
  })


  test('La propiedad computada textoUppercase debe retornar un texto en mayusculas', async()=> {
    await wrapper.setData({
      texto: 'Chao mundo!'
    })

    expect( wrapper.vm.textoUppercase ).toBe('CHAO MUNDO!')
  })
})
