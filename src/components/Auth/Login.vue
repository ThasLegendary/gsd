<template>
  <div id="authentication">
    <div class="left">
        <img src="/images/logo/sheepito-simple.svg" width="400" height="375" />
    </div>
    <div class="right">
        <p><span class="bigger">Hello</span>, my name is Sheepito!</p>
        <p>To start a good adventure with me, connect me to your development process tool!</p>

        <ul>
            <li>                
                <img class="logo" @click="authenticate()" src="../../assets/octocat.png" border="0" />
            </li>
        </ul>

        <span class="bottom">sheepit</span>
    </div>
    </div>
</template>

<script>

export default {
  name: 'Login',
  methods: {
    authenticate: function () {
        console.log(this.$githubAuth);
      var uri = this.$githubAuth.code.getUri();
      open(uri);
    }
  }
}
</script>

<style lang="scss">
  
</style>

/*
#authentication {
    width: 100vw;
    height: 100vh;
    font-family: font(title);
    display: table;
    overflow: hidden;
    > div {
        display: table-cell;

        &.left {
            text-align: center;
            width: 35vw;
            height: 100%;
            font-size: 0;
            vertical-align: bottom;
            padding-bottom: 100px;
        }

        &.right {
            position: relative;
            padding: 100px;
            background: color(purple);
            color: #FFF;
            font-size: 60px;
            width: 64vw;
            height: 100%;
            vertical-align: middle;

            @media only screen and (max-height: 768px) {
                font-size: 50px;
                padding: 0 100px;
            }

            p {
                margin-bottom: 50px;

                .bigger {
                    font-size: 100px;
                }
            }

            .bottom {
                position: absolute;
                bottom: 30px;
                right: 30px;
                font-size: 50px;
            }

            ul {
                margin-top: 100px;
                li {
                    font-size: 0;
                    display: table-cell;
                    vertical-align: middle;
                    text-align: center;
                    background: #FFF;
                    width: 200px;
                    height: 200px;
                    @include border-radius(4px);

                    a {
                        font-family: Roboto;
                        text-decoration: none;
                        font-size: 30px;
                    }

                    img.logo {
                        width: 150px;
                        height: 125px;
                    }

                    img.title {
                        width: 100px;
                    }
                }
            }

            &::before {
                content: '';
                position: absolute;
                top: 30%;
                left: -35px;
                width: 0px;
                height: 0px;
                border-top: 60px solid transparent;
                border-bottom: 80px solid transparent;
                border-left: 60px solid color(purple);
                transform: rotate(30deg);
            }
        }
    }
}
*/