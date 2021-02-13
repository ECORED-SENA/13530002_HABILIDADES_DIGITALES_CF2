<template lang="pug">
.linea-tiempo
  .linea-tiempo__row(v-for="item of 10")
    .linea-tiempo__content
      .linea-tiempo__text
        span.h1 1971
        span Este fue el mensaje del primer e-mail de la historia.

    .linea-tiempo__content
      .linea-tiempo__icon
        .linea-tiempo__icon__container
          .linea-tiempo__icon__inner
          img(src="@/assets/images/pages/tema2/img_11.svg")

  
</template>

<script>
export default {
  name: 'LineaTiempo',
}
</script>

<style lang="sass" scoped>

.linea-tiempo
  position: relative
  padding: 30px 0

  &__row
    display: flex
    align-items: center
    margin-bottom: 100px
    position: relative
    cursor: pointer

    &::before, &::after
      content: ''
      display: block
      top: 50%
      left: 50%
      width: 40px
      height: 40px
      border-radius: 50%
      position: absolute
      background: #00D1E3
      transform: translate(-50%,-50%)

    &::after
      width: 20px
      height: 20px
      background: #fff

    &:nth-child(even)
      flex-direction: row-reverse

      .linea-tiempo

        &__content
          text-align: left

        &__text
          align-items: flex-start
          margin-right: 0
          margin-left: 80px

        &__icon
          justify-content: flex-end

          &__container
            margin-left: 0
            margin-right: 50px

          &__inner

            &::before
              left: auto
              right: 0
              transform: translate(35%,-50%) rotate(45deg)

      &:hover
        .linea-tiempo__icon__container
          transform: scale(1.3) translateX(-15px)
        .linea-tiempo__text
          transform: translateX(-30px)

    &:hover
      .linea-tiempo__icon__container
        transform: scale(1.3) translateX(15px)
      .linea-tiempo__text
        transform: translateX(30px)



  &__content
    width: 50%
    text-align: right

    span
      display: block
      margin: 0
      max-width: 200px
      line-height: 1.1em

  &__text
    display: flex
    flex-direction: column
    align-items: flex-end
    margin-right: 80px
    transition: transform 0.3s ease-in-out

  &__icon
    display: flex

    &__container
      position: relative
      width: 130px
      height: 130px
      background: #00D1E3
      border-radius: 50%
      margin-left: 50px
      transition: transform 0.3s ease-in-out

    &__inner
      width: 100%
      height: 100%

      &::before
        content: ''
        display: block
        top: 50%
        left: 0
        width: 30px
        height: 30px
        position: absolute
        background: #00D1E3
        transform: translate(-35%,-50%) rotate(45deg)

      &::after
        content: ''
        display: block
        position: absolute
        top: 50%
        left: 50%
        transform: translate(-50%,-50%)
        width: 90px
        height: 90px
        background: #fff
        border-radius: 50%
        box-shadow: 4px 4px 3px 0px rgba(0,0,0,0.3)

    img
      width: 60px
      position: absolute
      top: 50%
      left: 50%
      transform: translate(-50%,-50%)


  &::before
    content: ''
    display: block
    top: 0
    left: 50%
    width: 10px
    height: 100%
    border-radius: 5px
    position: absolute
    background: #00D1E3
    transform: translate(-50%,0)
</style>
