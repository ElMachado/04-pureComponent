import React, { Component, PureComponent } from 'react'
import ReactDOM from 'react-dom'

import './scss/styles.scss'

const images = []

class AnimalImage extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    console.count('render')
    const { src, alt } = this.props

    return <section className="gallery">
      <img src={src} alt={alt} className="gallery__img" />
    </section>
  }
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      image : {
        alt: '',
        src: ''
      }
    }
  }

  componentDidMount() {
    console.warn('1. componentDidMount')
    // fetch images
    images.push({
      url: 'https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg?cs=srgb&dl=adorable-animal-breed-356378.jpg&fm=jpg',
      alt: 'dog'
    })
    images.push({
      url: 'https://images.pexels.com/photos/2831538/pexels-photo-2831538.jpeg?cs=srgb&dl=animal-animal-photography-bokeh-2831538.jpg&fm=jpg',
      alt: 'cat'
    })
    images.push({
      url: 'https://images.pexels.com/photos/2883510/pexels-photo-2883510.jpeg?cs=srgb&dl=adorable-animal-animal-photography-2883510.jpg&fm=jpg',
      alt: 'rabbit'
    })

    const animals = images.map(img => {
      return img.alt
    })

    this.setState({
      image: {
        src: images[1].url,
        alt: images[1].alt
      },
      animal: animals[1]
    })
  }

  componentDidUpdate(prevProps, prevState) {
    console.warn('3. componentDidUpdate')
    if (prevState.image.alt === 'cat') {
      const img = document.querySelector('img')
      img.animate([
        // keyframes
        { transform: 'translateX(0px)' },
        { transform: 'translateX(300px)' }
      ], {
        // timing options
        duration: 2000,
        iterations: 2
      });
    }
  }

  handleImage = (e) => {
    e.preventDefault()
    const animal = e.target.innerHTML
    let state = { }
    if (animal.toLowerCase() === 'cat') {
      state = {
        ...this.state,
        image: {
          src: images[1].url,
          alt: images[1].alt
        },
        animal: images[1].alt
      }
      this.setState(state)
    }
    if (animal.toLowerCase() === 'dog') {
      state = {
        ...this.state,
        image: {
          src: images[0].url,
          alt: images[0].alt
        },
        animal: images[0].alt
      }
      this.setState(state)
    }
    if (animal.toLowerCase() === 'rabbit') {
      state = {
        ...this.state,
        image: {
          src: images[2].url,
          alt: images[2].alt
        },
        animal: images[2].alt
      }
      this.setState(state)
    }
  }

  render () {
    const { image } = this.state

    return (<div>
      <button onClick={this.handleImage} className="btn">Cat</button>
      <button onClick={this.handleImage} className="btn">Dog</button>
      <button onClick={this.handleImage} className="btn">Rabbit</button>

      <AnimalImage {...image} />
    </div>
    )
  }
}

const root = document.getElementById('root')

ReactDOM.render(<App />, root)
