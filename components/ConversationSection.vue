<template>
  <section id="conversation">
    <div class="wrap container-fluid">
      <div class="row">
        <div class="col-xs-12 content-wrapper">
          <h2 v-sticky :z-index="100" :sticky-top="100" class="section-title">
            <div>Únete a conversa</div>
          </h2>

          <div class="social">
            <a :href="'https://twitter.com/' + texts.globals.twitter.account" title="Twitter">
              <i class="fa fa-twitter fa-2x"/>
            </a>

            <a :href="`mailto:${texts.globals.email}`" :title="'Email ' + texts.globals.email">
              <i class="fa fa-envelope-o fa-2x"/>
            </a>

            <a :href="texts.globals.project_github" title="GitHub">
              <i class="fa fa-github fa-2x"/>
            </a>
          </div>
          <div class="row">
            <div class="col-xs-12 col-sm-6 col">
              <div class="section-content section-content-center">
                <p>Aberto a todo o mundo, é o punto de encontro virtual de todos os grupos e un bo sitio para facer un pouco de networking:</p>

                <p>
                  <a :href="texts.globals.slack.url">
                    <img :src="texts.globals.slack.img_src" alt="Slack">
                  </a>
                </p>

                <p>
                  <a
                    :href="texts.globals.slack.invitation"
                    class="btn"
                  >Únete ao noso Slack clickando aquí</a>
                </p>
              </div>
            </div>
            <div class="col-xs-12 col-sm-6 col">
              <a
                :href="'https://twitter.com/' + texts.globals.twitter.account"
                class="twitter-timeline"
                data-theme="light"
                data-height="400"
                data-width="400"
                data-border-color="#e84a5f"
                data-chrome="nofooter"
              >Tweets by {{ texts.globals.name_community }}</a>
              <script
                v-if="cookieStatus=='accept'"
                async
                src="https://platform.twitter.com/widgets.js"
                charset="utf-8"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ConversationSection",
  props: {
    texts: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    cookieStatus() {
      return this.$store.state.cookieStatus;
    }
  }
};
</script>
