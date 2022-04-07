<template>
  <section class="ka-bDjt9pmkrGhrDyRkb6tfJe">
    <!-- Home -->
    <KaContainer code="k-home" data="kHome" :options="{ overflow: `y` }">
      <!-- Sans titre -->
      <KaContainer code="k-sans-titre">
        <!-- Conteneur -->
        <KaContainer
          code="k-conteneur"
          :options="{
            overflow: `hidden`,
            bgType: 1,
            videoOptions: {
              src: `https://m.media-amazon.com/images/G/01/xmM9E6ZZp2x76/LostArk-ed62cf01-3dbd-4ed3-b8d2-06053a620b3b/LA_Launch_Gameplay_GA_0ee2d503-6354-4bc6-b79b-53a6b1ec18e3_CB1198675309_v2_XL_2._CB1644279079_.webm`,
            },
          }"
          :xs="{ overflow: null }"
          simple
        >
          <!-- Header with sublinks and button -->
          <KaContainer
            code="k-header-with-sublinks-and-button"
            :options="{ flexDirection: `row` }"
            :xs="{ flexDirection: `row` }"
          >
            <KaSeparator code="k-separateur-1" />
            <KaButton
              code="k-button-1"
              :options="{ buttonIcon: `fas fa-angle-down` }"
              :xs="{ hidden: true }"
            >
              {{
                t(
                  'home.sansTitre.conteneur.headerWithSublinksAndButton.button1.value',
                  `Jeu`
                )
              }}
            </KaButton>
            <KaButton
              code="k-button-2"
              :options="{ buttonIcon: `fas fa-angle-down` }"
              :xs="{ hidden: true }"
            >
              {{
                t(
                  'home.sansTitre.conteneur.headerWithSublinksAndButton.button2.value',
                  `actualités`
                )
              }}
            </KaButton>
            <KaButton
              code="k-button-3"
              :options="{ buttonIcon: `fas fa-angle-down` }"
              :xs="{ hidden: true }"
            >
              {{
                t(
                  'home.sansTitre.conteneur.headerWithSublinksAndButton.button3.value',
                  `Communauté`
                )
              }}
            </KaButton>
            <KaButton
              code="k-button-4"
              :options="{ buttonIcon: `fas fa-angle-down` }"
              :xs="{ hidden: true }"
            >
              {{
                t(
                  'home.sansTitre.conteneur.headerWithSublinksAndButton.button4.value',
                  `assistance`
                )
              }}
            </KaButton>
            <KaSeparator code="k-separateur" :xs="{ hidden: true }" />
            <KaButton code="k-button-5" :xs="{ hidden: true }">
              {{
                t(
                  'home.sansTitre.conteneur.headerWithSublinksAndButton.button5.value',
                  `jouez maintenant`
                )
              }}
            </KaButton>
            <KaButton code="k-button-6">
              {{
                t(
                  'home.sansTitre.conteneur.headerWithSublinksAndButton.button6.value',
                  `achetez le pack de démarrage`
                )
              }}
            </KaButton>
          </KaContainer>
          <KaSeparator code="k-separator-1" />
          <!-- Unify flex row -->
          <KaContainer
            code="k-unify-flex-row"
            :options="{ flexDirection: `column` }"
          >
            <KaImage
              code="k-image-1"
              :options="{
                animationIn: `fadeIn`,
                lazyOptions: {
                  throttle: 200,
                  once: true,
                  intersection: { threshold: 0.1 },
                },
                alt: `Image 1`,
              }"
            >
              https://ucarecdn.com/78c930a7-4bd4-43cb-a2d1-225a7e63ed41/-/preview/-/quality/smart/
            </KaImage>
            <!-- Unify flex row -->
            <KaContainer
              code="k-container-1"
              :options="{ flexDirection: `row` }"
              :xs="{ flexDirection: null }"
            >
              <KaButton code="k-button-7" :options="{ click: kButton7Click }">
                {{
                  t(
                    'home.sansTitre.conteneur.unifyFlexRow.container1.button7.value',
                    `jouez gratuitement dès maintenant`
                  )
                }}
              </KaButton>
              <KaButton
                code="k-button-8"
                :options="{
                  buttonIcon: `fab fa-youtube`,
                  style: { color: appData.theme.focusColor },
                }"
              >
                {{
                  t(
                    'home.sansTitre.conteneur.unifyFlexRow.container1.button8.value',
                    `&nbsp; regarder la bande annonce`
                  )
                }}
              </KaButton>
            </KaContainer>
            <KaText
              code="k-texte"
              :options="{
                animation: `left-rotation`,
                animationIn: `fadeInLeftBig`,
                animationOut: `fadeOutRight`,
              }"
            >
              {{
                t(
                  'home.sansTitre.conteneur.unifyFlexRow.texte.value',
                  `Votre odyssée commence`
                )
              }}
            </KaText>
          </KaContainer>
        </KaContainer>
        <!-- Conteneur 1 -->
        <KaContainer code="k-conteneur-1" simple>
          <!-- Conteneur -->
          <KaContainer
            code="k-container-2"
            :options="{ flexDirection: `row` }"
            :xs="{ flexDirection: null }"
          >
            <KaImage
              code="k-image"
              :options="{
                animationIn: `fadeIn`,
                lazyOptions: {
                  throttle: 200,
                  once: true,
                  intersection: { threshold: 0.1 },
                },
                alt: `Image`,
              }"
            >
              https://ucarecdn.com/5569db06-6ed0-4b60-9f3e-3d0bef331d33/-/preview/-/quality/smart/
            </KaImage>
            <KaText code="k-text-1">
              {{ t('home.sansTitre.conteneur1.container2.text1.value', `Un
              ancien ennemi apporte un nouveau défi dans le raid abyssal
              d'Argos. Votre voyage continue dans l'épisode Kadan, qui vous
              transporte sur des îles isolées où vous rencontrez l'un des sept
              dans votre quête du tueur de gardiens.
              <a href="google.com"
                ><span style="color: hsl(0, 0%, 60%)"
                  >En savoir plus...</span
                ></a
              >`) }}
            </KaText>
          </KaContainer>
        </KaContainer>
        <!-- Conteneur 2 -->
        <KaContainer code="k-conteneur-2" simple>
          <KaText code="k-text-2">
            {{ t('home.sansTitre.conteneur2.text2.value', `Actualités`) }}
          </KaText>
          <KaImage
            code="k-image-2"
            :options="{
              animationIn: `fadeIn`,
              lazyOptions: {
                throttle: 200,
                once: true,
                intersection: { threshold: 0.1 },
              },
              alt: `Image`,
            }"
          >
            https://ucarecdn.com/44313eae-e35b-4db5-980f-1fe2161e6165/-/preview/-/quality/smart/
          </KaImage>
          <!-- Unify flex row -->
          <KaContainer
            code="k-container-3"
            :options="{ flexDirection: `row` }"
            :xs="{ flexDirection: null }"
          >
            <!-- Conteneur -->
            <KaContainer
              code="k-container-4"
              :options="{
                overflow: `hidden`,
                flexDirection: `column`,
              }"
            >
              <KaImage
                code="k-image-3"
                :options="{
                  animationIn: `fadeIn`,
                  hasTransform: true,
                  lazyOptions: {
                    throttle: 200,
                    once: true,
                    intersection: { threshold: 0.1 },
                  },
                  imgFit: `cover`,
                  alt: `Image`,
                  $inheritState: { hover: true },
                }"
              >
                https://ucarecdn.com/f6b7870b-5f85-4397-905a-8e619a3c9e86/-/preview/-/quality/smart/
              </KaImage>
              <KaText code="k-text-3">
                {{
                  t(
                    'home.sansTitre.conteneur2.container3.container4.text3.value',
                    `Notes de mises à jour`
                  )
                }}
              </KaText>
              <KaText code="k-text-4">
                {{
                  t(
                    'home.sansTitre.conteneur2.container3.container4.text4.value',
                    `La transparence compte beaucoup pour nous, et nous voulons vous faire part des mises à jour du jeu et des problème sur lesquels nous travaillons avec le plus de cohérence possible.`
                  )
                }}
              </KaText>
              <KaButton code="k-bouton">
                {{
                  t(
                    'home.sansTitre.conteneur2.container3.container4.bouton.value',
                    `Lire plus`
                  )
                }}
              </KaButton>
            </KaContainer>
            <!-- Conteneur -->
            <KaContainer
              code="k-container-5"
              :options="{
                overflow: `hidden`,
                flexDirection: `column`,
              }"
            >
              <KaImage
                code="k-image-4"
                :options="{
                  animationIn: `fadeIn`,
                  hasTransform: true,
                  lazyOptions: {
                    throttle: 200,
                    once: true,
                    intersection: { threshold: 0.1 },
                  },
                  imgFit: `cover`,
                  alt: `Image`,
                  $inheritState: { hover: true },
                }"
              >
                https://ucarecdn.com/9ecf3666-599a-4d5b-bb78-608fe02773ef/-/preview/-/quality/smart/
              </KaImage>
              <KaText code="k-text-5">
                {{
                  t(
                    'home.sansTitre.conteneur2.container3.container5.text5.value',
                    `Notes de mises à jour`
                  )
                }}
              </KaText>
              <KaText code="k-text-6">
                {{
                  t(
                    'home.sansTitre.conteneur2.container3.container5.text6.value',
                    `La transparence compte beaucoup pour nous, et nous voulons vous faire part des mises à jour du jeu et des problème sur lesquels nous travaillons avec le plus de cohérence possible.`
                  )
                }}
              </KaText>
              <KaButton code="k-button-9">
                {{
                  t(
                    'home.sansTitre.conteneur2.container3.container5.button9.value',
                    `Lire plus`
                  )
                }}
              </KaButton>
            </KaContainer>
            <!-- Conteneur -->
            <KaContainer
              code="k-container-6"
              :options="{
                overflow: `hidden`,
                flexDirection: `column`,
              }"
            >
              <KaImage
                code="k-image-5"
                :options="{
                  animationIn: `fadeIn`,
                  hasTransform: true,
                  lazyOptions: {
                    throttle: 200,
                    once: true,
                    intersection: { threshold: 0.1 },
                  },
                  imgFit: `cover`,
                  alt: `Image`,
                  $inheritState: { hover: true },
                }"
              >
                https://ucarecdn.com/388a3688-b177-4d1a-9e84-0bc1f46d232d/-/preview/-/quality/smart/
              </KaImage>
              <KaText code="k-text-7">
                {{
                  t(
                    'home.sansTitre.conteneur2.container3.container6.text7.value',
                    `Notes de mises à jour`
                  )
                }}
              </KaText>
              <KaText code="k-text-8">
                {{
                  t(
                    'home.sansTitre.conteneur2.container3.container6.text8.value',
                    `La transparence compte beaucoup pour nous, et nous voulons vous faire part des mises à jour du jeu et des problème sur lesquels nous travaillons avec le plus de cohérence possible.`
                  )
                }}
              </KaText>
              <KaButton code="k-button-10">
                {{
                  t(
                    'home.sansTitre.conteneur2.container3.container6.button10.value',
                    `Lire plus`
                  )
                }}
              </KaButton>
            </KaContainer>
          </KaContainer>
        </KaContainer>
        <!-- Conteneur 3 -->
        <KaContainer code="k-conteneur-3">
          <KaText code="k-text-9">
            {{
              t('home.sansTitre.conteneur3.text9.value', `à propos de lost ark`)
            }}
          </KaText>
          <KaImage
            code="k-image-6"
            :options="{
              animationIn: `fadeIn`,
              lazyOptions: {
                throttle: 200,
                once: true,
                intersection: { threshold: 0.1 },
              },
              alt: `Image`,
            }"
          >
            https://ucarecdn.com/44313eae-e35b-4db5-980f-1fe2161e6165/-/preview/-/quality/smart/
          </KaImage>
          <!-- Unify flex row -->
          <KaContainer
            code="k-container-7"
            :options="{ flexDirection: `column` }"
          >
            <KaText code="k-text-10">
              {{
                t(
                  'home.sansTitre.conteneur3.container7.text10.value',
                  `Plongez dans l'histoire épique d'Archésia Relevez le défi des combats d'action palpitants et découvrez comment personnaliser votre style de combat avec diverses classes de personnages tandis que vous combattez les forces obscures qui cherchent à obtenir le pouvoir de l'Arche.`
                )
              }}
            </KaText>
            <KaButton code="k-button-11">
              {{
                t(
                  'home.sansTitre.conteneur3.container7.button11.value',
                  `en savoir plus`
                )
              }}
            </KaButton>
          </KaContainer>
        </KaContainer>
        <!-- Conteneur 3 -->
        <KaContainer code="k-container-8">
          <KaText code="k-text-11">
            {{ t('home.sansTitre.container8.text11.value', `prime gaming`) }}
          </KaText>
          <KaImage
            code="k-image-7"
            :options="{
              animationIn: `fadeIn`,
              lazyOptions: {
                throttle: 200,
                once: true,
                intersection: { threshold: 0.1 },
              },
              alt: `Image`,
            }"
          >
            https://ucarecdn.com/44313eae-e35b-4db5-980f-1fe2161e6165/-/preview/-/quality/smart/
          </KaImage>
          <!-- Unify flex row -->
          <KaContainer
            code="k-container-9"
            :options="{ flexDirection: `column` }"
          >
            <KaText code="k-texte-1">
              {{
                t(
                  'home.sansTitre.container8.container9.texte1.value',
                  `récompenses disponibles`
                )
              }}
            </KaText>
            <KaText code="k-text-12">
              {{
                t(
                  'home.sansTitre.container8.container9.text12.value',
                  `Plongez dans l'histoire épique d'Archésia Relevez le défi des combats d'action palpitants et découvrez comment personnaliser votre style de combat avec diverses classes de personnages tandis que vous combattez les forces obscures qui cherchent à obtenir le pouvoir de l'Arche.`
                )
              }}
            </KaText>
            <KaButton code="k-button-12">
              {{
                t(
                  'home.sansTitre.container8.container9.button12.value',
                  `en savoir plus`
                )
              }}
            </KaButton>
          </KaContainer>
        </KaContainer>
        <!-- Conteneur 5 -->
        <KaContainer code="k-conteneur-5" simple>
          <KaText code="k-text-13">
            {{ t('home.sansTitre.conteneur5.text13.value', `médias`) }}
          </KaText>
          <KaImage
            code="k-image-8"
            :options="{
              animationIn: `fadeIn`,
              lazyOptions: {
                throttle: 200,
                once: true,
                intersection: { threshold: 0.1 },
              },
              alt: `Image`,
            }"
          >
            https://ucarecdn.com/44313eae-e35b-4db5-980f-1fe2161e6165/-/preview/-/quality/smart/
          </KaImage>
          <!-- Unify flex row -->
          <KaContainer code="k-container-10" :options="{ flexDirection: null }">
            <!-- Conteneur -->
            <KaContainer code="k-container-11">
              <KaImage
                code="k-image-9"
                :options="{
                  animationIn: `fadeIn`,
                  href: { name: `dialogPlayer` },
                  lazyOptions: {
                    throttle: 200,
                    once: true,
                    intersection: { threshold: 0.1 },
                  },
                  alt: `Image`,
                  click: kImage9Click,
                }"
              >
                https://ucarecdn.com/a14c4158-1ab2-4b71-8dac-3816a0812442/-/preview/-/quality/smart/
              </KaImage>
            </KaContainer>
            <!-- Conteneur -->
            <KaContainer code="k-container-12">
              <KaImage
                code="k-image-10"
                :options="{
                  animationIn: `fadeIn`,
                  href: { name: `dialogPlayer` },
                  lazyOptions: {
                    throttle: 200,
                    once: true,
                    intersection: { threshold: 0.1 },
                  },
                  alt: `Image`,
                  click: kImage10Click,
                }"
              >
                https://ucarecdn.com/a14c4158-1ab2-4b71-8dac-3816a0812442/-/preview/-/quality/smart/
              </KaImage>
            </KaContainer>
            <!-- Conteneur -->
            <KaContainer code="k-container-13">
              <KaImage
                code="k-image-11"
                :options="{
                  animationIn: `fadeIn`,
                  href: { name: `dialogPlayer` },
                  lazyOptions: {
                    throttle: 200,
                    once: true,
                    intersection: { threshold: 0.1 },
                  },
                  alt: `Image`,
                  click: kImage11Click,
                }"
              >
                https://ucarecdn.com/a14c4158-1ab2-4b71-8dac-3816a0812442/-/preview/-/quality/smart/
              </KaImage>
            </KaContainer>
            <!-- Conteneur -->
            <KaContainer code="k-container-14" />
            <!-- Conteneur -->
            <KaContainer code="k-container-15" />
            <!-- Conteneur -->
            <KaContainer code="k-container-16" />
          </KaContainer>
        </KaContainer>
        <!-- Conteneur 6 -->
        <KaContainer code="k-conteneur-6">
          <KaText code="k-text-14">
            {{
              t(
                'home.sansTitre.conteneur6.text14.value',
                `RECEVEZ DES OFFRES EXCLUSIVES, DES CONSEILS ET BIEN PLUS ENCORE !`
              )
            }}
          </KaText>
          <KaText code="k-text-15">
            {{ t('home.sansTitre.conteneur6.text15.value', `<a
              href="S'inscrire à la newsletter Lost Ark"
              ><span style="color: hsl(0, 0%, 60%)"><u>S'inscrire</u></span></a
            ><span style="color: hsl(0, 0%, 60%)"> </span>à la newsletter Lost
            Ark`) }}
          </KaText>
        </KaContainer>
        <!-- Footer -->
        <KaContainer
          code="k-footer"
          :options="{
            flexDirection: `row`,
            lazyOptions: {
              throttle: 200,
              once: true,
              intersection: { threshold: 0.1 },
            },
          }"
          :xs="{ flexDirection: `column` }"
        >
          <!-- Conteneur 1 -->
          <KaContainer
            code="k-container-17"
            :options="{
              overflow: `hidden`,
              flexDirection: `column`,
            }"
          >
            <KaImage
              code="k-image-12"
              :options="{
                animationIn: null,
                lazyOptions: {
                  throttle: 200,
                  once: true,
                  intersection: { threshold: 0.1 },
                },
                alt: `Image`,
              }"
            >
              https://ucarecdn.com/5c8f246d-21ad-415f-99bc-b6f7415b1f88/-/preview/-/quality/smart/
            </KaImage>
            <!-- Conteneur -->
            <KaContainer
              code="k-container-18"
              :options="{ flexDirection: `row` }"
              :xs="{ flexDirection: null }"
            >
              <KaImage
                code="k-image-13"
                :options="{
                  animationIn: `fadeIn`,
                  lazyOptions: {
                    throttle: 200,
                    once: true,
                    intersection: { threshold: 0.1 },
                  },
                  alt: `Image`,
                }"
              >
                https://ucarecdn.com/fc70d9b7-5fb1-4bd2-9955-055f7f385165/-/preview/-/quality/smart/
              </KaImage>
              <KaImage
                code="k-image-14"
                :options="{
                  animationIn: `fadeIn`,
                  lazyOptions: {
                    throttle: 200,
                    once: true,
                    intersection: { threshold: 0.1 },
                  },
                  alt: `Image`,
                }"
              >
                https://ucarecdn.com/c803770e-5205-49fb-95cb-2e1439c6037e/-/preview/-/quality/smart/
              </KaImage>
            </KaContainer>
          </KaContainer>
          <!-- Conteneur 1 -->
          <KaContainer
            code="k-container-19"
            :options="{
              overflow: `hidden`,
              flexDirection: `column`,
            }"
          >
            <!-- Conteneur 1 -->
            <KaContainer code="k-container-20" simple>
              <KaText
                code="k-text-16"
                :options="{ click: kText16Click }"
                :xs="{ hidden: true }"
              >
                {{
                  t(
                    'home.sansTitre.footer.container19.container20.text16.value',
                    `retour haut de page`
                  )
                }}
              </KaText>
              <KaImage
                code="k-image-15"
                :options="{
                  animationIn: null,
                  lazyOptions: {
                    throttle: 200,
                    once: true,
                    intersection: { threshold: 0.1 },
                  },
                  alt: `Image`,
                }"
                :xs="{ hidden: true }"
              >
                https://ucarecdn.com/e01fe112-6adf-4e3b-96c9-e472c28c8380/-/preview/-/quality/smart/
              </KaImage>
            </KaContainer>
            <!-- Unify flex row -->
            <KaContainer
              code="k-container-21"
              :options="{ flexDirection: null }"
              :xs="{ flexDirection: `column` }"
            >
              <KaText code="k-text-17" :options="{ click: kText17Click }">
                {{
                  t(
                    'home.sansTitre.footer.container19.container21.text17.value',
                    `Mentions légales`
                  )
                }}
              </KaText>
              <KaText code="k-text-18" :options="{ click: kText18Click }">
                {{
                  t(
                    'home.sansTitre.footer.container19.container21.text18.value',
                    `Politique de confidentialité`
                  )
                }}
              </KaText>
              <KaText code="k-text-19" :options="{ click: kText19Click }">
                {{
                  t(
                    'home.sansTitre.footer.container19.container21.text19.value',
                    `Préférences en matière de cookies`
                  )
                }}
              </KaText>
              <KaText code="k-text-20" :options="{ click: kText20Click }">
                {{
                  t(
                    'home.sansTitre.footer.container19.container21.text20.value',
                    `Publicités ciblées`
                  )
                }}
              </KaText>
            </KaContainer>
            <KaText code="k-text-21">
              {{
                t(
                  'home.sansTitre.footer.container19.text21.value',
                  `Publié par Amazon Games sous licence. © 2021-2022 Smilegate RPG. Tous droits réservés. Lost Ark et le logo Lost Ark sont des marques de commerce de Smilegate RPG, Inc. Utilisé par Amazon Games sous licence.`
                )
              }}
            </KaText>
          </KaContainer>
          <!-- Conteneur 2 -->
          <KaContainer
            code="k-container-22"
            :options="{ flexDirection: `column` }"
          >
            <KaImage
              code="k-image-16"
              :options="{
                animationIn: `fadeIn`,
                lazyOptions: {
                  throttle: 200,
                  once: true,
                  intersection: { threshold: 0.1 },
                },
                alt: `Image`,
              }"
            >
              https://ucarecdn.com/2c6a709e-e565-4e1e-a44d-adaa91005731/-/preview/-/quality/smart/
            </KaImage>
            <!-- Unify flex row -->
            <KaContainer
              code="k-container-23"
              :options="{ flexDirection: `row` }"
              :xs="{ flexDirection: `row` }"
            >
              <KaIcon
                code="k-icone"
                :options="{ click: kIconeClick }"
                v-tippy="{
                  content: t(
                    'home.sansTitre.footer.container22.container23.icone.tooltip',
                    `Rejoignez-nous sur Discord`
                  ),
                }"
              >
                <fa-brands-discord />
              </KaIcon>
              <KaIcon
                code="k-icon-1"
                :options="{ click: kIcon1Click }"
                v-tippy="{
                  content: t(
                    'home.sansTitre.footer.container22.container23.icon1.tooltip',
                    `Suivez-nous sur Linkedin`
                  ),
                }"
              >
                <fa-brands-linkedin-in />
              </KaIcon>
              <KaIcon
                code="k-icon-2"
                :options="{ click: kIcon2Click }"
                v-tippy="{
                  content: t(
                    'home.sansTitre.footer.container22.container23.icon2.tooltip',
                    `Suivez-nous sur Facebook`
                  ),
                }"
              >
                <fa-brands-facebook />
              </KaIcon>
              <KaIcon
                code="k-icon-3"
                :options="{ click: kIcon3Click }"
                v-tippy="{
                  content: t(
                    'home.sansTitre.footer.container22.container23.icon3.tooltip',
                    `Suivez-nous sur Linkedin`
                  ),
                }"
              >
                <fa-brands-linkedin-in />
              </KaIcon>
              <KaIcon
                code="k-icon-4"
                :options="{ click: kIcon4Click }"
                v-tippy="{
                  content: t(
                    'home.sansTitre.footer.container22.container23.icon4.tooltip',
                    `Suivez-nous sur Linkedin`
                  ),
                }"
              >
                <fa-brands-linkedin-in />
              </KaIcon>
            </KaContainer>
          </KaContainer>
        </KaContainer>
      </KaContainer>
    </KaContainer>
  </section>
</template>

<script setup lang="ts">
import appInfo from '~/app-info.json'
import { scrollTo, generateMeta } from 'kapix-components-vue3'

const router = useRouter()

// App Data
const appData = reactive({
  title: `React Code Gen WIP`,
  icon: `work`,
  name: `reactcodegenwip`,
  owner: `henrilepage0@gmail.com`,
  version: `master`,
  copyright: `copyright © 2022`,
  theme: {
    id: null,
    fontColor: `#222222`,
    fontSize: 14,
    fontFamily: `Work Sans,sans-serif`,
    focusColor: `#FFFFFFFF`,
    primaryColor: `#42A5F5`,
    secondaryColor: `#ffc107`,
    focusBackgroundColor: `#222222`,
    backgroundColor: null,
    backgroundImage: null,
  },
})

// Data
const kHome = reactive({ scrollTop: 0 })

// Page Data
const pageData = reactive({
  title: `Home`,
  description: ``,
})
const windowTitle = computed(() => pageData.title)
// https://github.com/vueuse/head
useHead({
  title: windowTitle,
  htmlAttrs: { lang: `fr-FR` },
  meta: computed(() =>
    generateMeta({
      title: windowTitle.value,
      description: pageData.description,
      canonicalUrl: appInfo.hostname,
    })
  ),
})

// Methods
const kButton7Click = () => {}
const kImage9Click = () => {
  router.push({ name: `dialogPlayer` })
}
const kImage10Click = () => {
  router.push({ name: `dialogPlayer` })
}
const kImage11Click = () => {
  router.push({ name: `dialogPlayer` })
}
const kText16Click = () => {
  scrollTo({ el: 'k-conteneur-1' })
}
const kText17Click = () => {
  scrollTo({ el: 'undefined' })
}
const kText18Click = () => {
  scrollTo({ el: 'undefined' })
}
const kText19Click = () => {
  scrollTo({ el: 'undefined' })
}
const kText20Click = () => {
  scrollTo({ el: 'undefined' })
}
const kIconeClick = () => {}
const kIcon1Click = () => {}
const kIcon2Click = () => {}
const kIcon3Click = () => {}
const kIcon4Click = () => {}
</script>

<style lang="scss">
.ka-bDjt9pmkrGhrDyRkb6tfJe:not(#\ ) {
  @include full-size;
  // Home
  .k-home {
    &.outer-style {
      background-image: url(https://ucarecdn.com/89a7333d-4554-4c1d-90e8-da523c362f06/-/preview/-/quality/smart/);
      background-repeat: no-repeat;
      background-position: 50% 50%;
      background-size: cover;
      height: 100%;
      width: 100%;
      min-height: 0;
      min-width: 0;
      z-index: 29;
    }
    &.inner-style {
      height: 100%;
    }
  }
  // Home > Sans titre
  .k-sans-titre {
    &.outer-style {
      background-image: url(https://ucarecdn.com/89a7333d-4554-4c1d-90e8-da523c362f06/-/preview/-/quality/smart/);
      background-repeat: no-repeat;
      background-position: 50% 50%;
      background-size: cover;
      height: 100%;
      width: 100%;
      min-height: 0;
      min-width: 0;
      z-index: 30;
    }
    &.inner-style {
      height: 100%;
    }
  }
  // Home > Sans titre > Conteneur
  .k-conteneur {
    &.outer-style {
      background-image: url(https://ucarecdn.com/d062b275-fdc7-4a6c-b4c0-ed3bdbaa834d/-/preview/-/quality/smart/);
      background-repeat: no-repeat;
      background-position: 50% 50%;
      background-size: cover;
      width: 100%;
      min-height: 100%;
      min-width: 0;
      z-index: 30;
    }
  }
  // Home > Sans titre > Conteneur >  Header with sublinks and button
  .k-header-with-sublinks-and-button {
    &.outer-style {
      background-color: #141412ff;
      height: 50px;
      width: 100%;
      min-height: 50px;
      min-width: 0;
      z-index: 30;
    }
    &.inner-style {
      height: 100%;
    }
    &.property-style {
      color: #ffffffff;
      background-color: #141412ff;
    }
    &.template-style {
      max-height: 50px;
    }
  }
  // Home > Sans titre > Conteneur >  Header with sublinks and button  > Séparateur 1
  .k-separateur-1 {
    &.outer-style {
      height: 100%;
      width: 100%;
      min-height: 0;
      min-width: 0;
      padding: 3px 0 6px 10px;
      z-index: 30;
    }
    &.inner-style {
      height: 100%;
    }
    &.property-style {
      transition-property: background-image;
      transition-duration: 0.6s;
      transition-timing-function: ease;
      background-image: url(https://ucarecdn.com/744033c5-039a-4d60-b313-bcfffb81f5a8/-/preview/-/quality/smart/);
      background-repeat: no-repeat;
      background-position: 50% 50%;
      background-size: contain;
    }
    @include media-breakpoint-down(xs) {
      &.property-style {
        background-image: url(https://ucarecdn.com/60651d11-92bf-421c-b516-75cd5f8fd174/-/preview/-/quality/smart/);
      }
      &.outer-style {
        max-width: 91px;
        overflow: inherit;
      }
      &.template-style {
        max-width: none;
      }
    }
  }
  // Home > Sans titre > Conteneur >  Header with sublinks and button  > Button 1
  .k-button-1 {
    &.outer-style {
      height: 100%;
      min-height: 0;
      padding: 5px;
      z-index: 28;
    }
    &.inner-style {
      height: 100%;
    }
    &.property-style {
      color: #c4c4c4ff;
      border-radius: 4px;
      overflow: hidden;
      font-weight: bold;
      text-align: center;
      text-transform: uppercase;
      padding: 5px 15px 5px 15px;
      cursor: pointer;
    }
    @include media-breakpoint-down(xs) {
      &.outer-style {
        height: 49%;
        overflow: inherit;
      }
      &.template-style {
        max-height: none;
      }
    }
  }
  // Home > Sans titre > Conteneur >  Header with sublinks and button  > Button 1
  .k-button-2 {
    &.outer-style {
      height: 100%;
      min-height: 0;
      padding: 5px;
      z-index: 27;
    }
    &.inner-style {
      height: 100%;
    }
    &.property-style {
      color: #c4c4c4ff;
      border-radius: 4px;
      overflow: hidden;
      font-weight: bold;
      text-align: center;
      text-transform: uppercase;
      padding: 5px 15px 5px 15px;
      cursor: pointer;
    }
    @include media-breakpoint-down(xs) {
      &.outer-style {
        height: 49%;
        overflow: inherit;
      }
      &.template-style {
        max-height: none;
      }
    }
  }
  // Home > Sans titre > Conteneur >  Header with sublinks and button  > Button 1
  .k-button-3 {
    &.outer-style {
      height: 100%;
      min-height: 0;
      padding: 5px;
      z-index: 26;
    }
    &.inner-style {
      height: 100%;
    }
    &.property-style {
      color: #c4c4c4ff;
      border-radius: 4px;
      overflow: hidden;
      font-weight: bold;
      text-align: center;
      text-transform: uppercase;
      padding: 5px 15px 5px 15px;
      cursor: pointer;
    }
    @include media-breakpoint-down(xs) {
      &.outer-style {
        height: 49%;
        overflow: inherit;
      }
      &.template-style {
        max-height: none;
      }
    }
  }
  // Home > Sans titre > Conteneur >  Header with sublinks and button  > Button 1
  .k-button-4 {
    &.outer-style {
      height: 100%;
      min-height: 0;
      padding: 5px;
      z-index: 25;
    }
    &.inner-style {
      height: 100%;
    }
    &.property-style {
      color: #c4c4c4ff;
      border-radius: 4px;
      overflow: hidden;
      font-weight: bold;
      text-align: center;
      text-transform: uppercase;
      padding: 5px 15px 5px 15px;
      cursor: pointer;
    }
    @include media-breakpoint-down(xs) {
      &.outer-style {
        height: 49%;
        overflow: inherit;
      }
      &.template-style {
        max-height: none;
      }
    }
  }
  // Home > Sans titre > Conteneur >  Header with sublinks and button  > Séparateur
  .k-separateur {
    &.outer-style {
      height: 100%;
      width: 100%;
      min-height: 0;
      min-width: 0;
      z-index: 24;
    }
    &.inner-style {
      height: 100%;
    }
  }
  // Home > Sans titre > Conteneur >  Header with sublinks and button  > Button 1
  .k-button-5 {
    &.outer-style {
      &.state-hover {
        .k-button-5 {
          &.property-style {
            color: #000000ff;
            background: linear-gradient(90deg, #ab8343ff, #f3ead2ff, #c8a773ff);
          }
        }
      }
      padding: 5px;
      z-index: 23;
    }
    &.property-style {
      border: 2px solid #bfa251ff;
      font-weight: bold;
      text-align: center;
      text-transform: uppercase;
      box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.2),
        0px 3px 4px 0px rgba(0, 0, 0, 0.14),
        0px 3px 3px -2px rgba(0, 0, 0, 0.12);
      padding: 5px 15px 5px 15px;
      cursor: pointer;
    }
  }
  // Home > Sans titre > Conteneur >  Header with sublinks and button  > Button 1
  .k-button-6 {
    &.outer-style {
      &.state-hover {
        .k-button-6 {
          &.property-style {
            color: #000000ff;
            background: linear-gradient(90deg, #ab8343ff, #f3ead2ff, #c8a773ff);
          }
        }
      }
      padding: 5px;
      z-index: 22;
    }
    &.property-style {
      border: 2px solid #bfa251ff;
      font-weight: bold;
      text-align: center;
      text-transform: uppercase;
      box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.2),
        0px 3px 4px 0px rgba(0, 0, 0, 0.14),
        0px 3px 3px -2px rgba(0, 0, 0, 0.12);
      padding: 5px 15px 5px 15px;
      cursor: pointer;
    }
    @include media-breakpoint-down(xs) {
      &.outer-style {
        width: 100%;
        min-width: 0;
        overflow: inherit;
      }
      &.template-style {
        max-width: none;
      }
    }
  }
  // Home > Sans titre > Conteneur > Séparateur
  .k-separator-1 {
    &.outer-style {
      height: 25.5%;
      width: 100%;
      min-height: 0;
      min-width: 0;
      z-index: 29;
    }
    &.inner-style {
      height: 100%;
    }
  }
  // Home > Sans titre > Conteneur > Unify flex row
  .k-unify-flex-row {
    &.outer-style {
      width: 100%;
      min-width: 0;
      justify-content: center;
      padding: 0 40px 0 34px;
      z-index: 25;
    }
    &.inner-style {
      max-width: 758px;
    }
  }
  // Home > Sans titre > Conteneur > Unify flex row > Image 1
  .k-image-1 {
    &.outer-style {
      background-size: contain;
      width: 100%;
      min-width: 0;
      z-index: 30;
      transform: scale(1.167, 1.167);
    }
  }
  // Home > Sans titre > Conteneur > Unify flex row > Unify flex row
  .k-container-1 {
    &.outer-style {
      width: 100%;
      min-width: 0;
      justify-content: center;
      padding: 26px 0 0 0;
      z-index: 29;
    }
    &.inner-style {
      max-width: 957px;
    }
  }
  // Home > Sans titre > Conteneur > Unify flex row > Unify flex row > Button 1
  .k-button-7 {
    &.outer-style {
      &.state-hover {
        .k-button-7 {
          &.property-style {
            color: #000000ff;
            background: linear-gradient(90deg, #ab8343ff, #f3ead2ff, #c8a773ff);
            opacity: 0.96;
          }
        }
      }
      width: 100%;
      min-width: 0;
      padding: 13px 5px 13px 5px;
      z-index: 27;
    }
    &.property-style {
      transition-property: background-color;
      transition-duration: 0.1s;
      transition-timing-function: ease;
      color: #ffffffff;
      background-color: #141412bf;
      border: 2px solid #bfa251ff;
      font-size: 14px;
      font-weight: bold;
      text-align: center;
      text-transform: uppercase;
      box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.2),
        0px 3px 4px 0px rgba(0, 0, 0, 0.14),
        0px 3px 3px -2px rgba(0, 0, 0, 0.12);
      padding: 5px 15px 5px 15px;
      cursor: pointer;
    }
  }
  // Home > Sans titre > Conteneur > Unify flex row > Unify flex row > Button 1
  .k-button-8 {
    &.outer-style {
      width: 100%;
      min-width: 0;
      padding: 13px 5px 13px 5px;
      z-index: 26;
    }
    &.property-style {
      font-size: 14px;
      font-weight: bold;
      text-align: center;
      text-shadow: 0px 5px 5px rgba(0, 0, 0, 0.2),
        0px 8px 10px rgba(0, 0, 0, 0.14), 0px 3px 14px rgba(0, 0, 0, 0.12);
      text-transform: uppercase;
      padding: 5px 15px 5px 15px;
      cursor: pointer;
    }
  }
  // Home > Sans titre > Conteneur > Unify flex row > Texte
  .k-texte {
    &.outer-style {
      width: 100%;
      min-width: 0;
      justify-content: center;
      z-index: 29;
    }
    &.inner-style {
      max-width: 1003px;
    }
    &.property-style {
      overflow: hidden;
      color: #ffffffff;
      background: linear-gradient(100deg, #14141240, #1414129e, #14141238);
      border-width: 2px 0 2px 0;
      border-color: #bfa251ff;
      border-style: ridge;
      font-size: 32px;
      font-family: TimesNewRoman, 'Times New Roman', Times, Baskerville, Georgia,
        serif;
      font-weight: bold;
      text-align: center;
      text-transform: uppercase;
      padding: 15px 15px 15px 15px;
    }
  }
  // Home > Sans titre > Conteneur 1
  .k-conteneur-1 {
    &.outer-style {
      background-size: contain;
      width: 100%;
      min-width: 0;
      z-index: 29;
    }
  }
  // Home > Sans titre > Conteneur 1 > Conteneur
  .k-container-2 {
    &.outer-style {
      background-image: url(https://ucarecdn.com/0d293702-5a76-4c54-abd5-05083e1af3f7/-/preview/-/quality/smart/);
      background-repeat: no-repeat;
      background-position: 50% 50%;
      background-size: cover;
      height: 546.5px;
      width: 100%;
      min-height: 546.5px;
      min-width: 0;
      align-items: center;
      justify-content: center;
      padding: 0 26px 0 26px;
      z-index: 30;
    }
    &.inner-style {
      max-width: 1021px;
      height: auto;
    }
    &.property-style {
      color: #ffffffff;
      background-color: #141412bf;
      border-width: 3px 0 3px 0;
      border-color: #bfa251ff;
      border-style: double;
      padding: 43px 0 38px 0;
    }
    &.template-style {
      max-height: 546.5px;
    }
    @include media-breakpoint-down(xs) {
      &.outer-style {
        height: auto;
        overflow: inherit;
      }
      &.template-style {
        max-height: none;
      }
    }
  }
  // Home > Sans titre > Conteneur 1 > Conteneur > Image
  .k-image {
    &.outer-style {
      background-size: contain;
      width: 100%;
      min-width: 0;
      padding: 0 0 0 25px;
      z-index: 30;
    }
    &.property-style {
      padding: 0 20px 0 20px;
    }
  }
  // Home > Sans titre > Conteneur 1 > Conteneur > Texte
  .k-text-1 {
    &.outer-style {
      width: 100%;
      min-width: 0;
      z-index: 29;
    }
    &.property-style {
      overflow: hidden;
      color: #c8c8c8ff;
      font-size: 15px;
      padding: 15px;
    }
    @include media-breakpoint-down(xs) {
      &.outer-style {
        padding: 66px 0 0 0;
      }
    }
  }
  // Home > Sans titre > Conteneur 2
  .k-conteneur-2 {
    &.outer-style {
      width: 100%;
      min-width: 0;
      padding: 80px 0 80px 0;
      z-index: 28;
    }
  }
  // Home > Sans titre > Conteneur 2 > Texte
  .k-text-2 {
    &.outer-style {
      width: 100%;
      min-width: 0;
      z-index: 29;
    }
    &.property-style {
      overflow: hidden;
      color: #ffffffff;
      font-size: 67px;
      font-family: TimesNewRoman, 'Times New Roman', Times, Baskerville, Georgia,
        serif;
      font-weight: bold;
      text-align: center;
      text-transform: uppercase;
      padding: 15px 15px 0 15px;
    }
  }
  // Home > Sans titre > Conteneur 2 > Image
  .k-image-2 {
    &.outer-style {
      background-size: contain;
      height: 66px;
      width: 100%;
      min-height: 66px;
      min-width: 0;
      justify-content: center;
      z-index: 28;
    }
    &.inner-style {
      height: 100%;
      width: auto;
    }
    &.template-style {
      max-height: 66px;
    }
  }
  // Home > Sans titre > Conteneur 2 > Unify flex row
  .k-container-3 {
    &.outer-style {
      width: 100%;
      min-width: 0;
      justify-content: center;
      padding: 67px 0 0 0;
      z-index: 25;
    }
    &.inner-style {
      max-width: 1300px;
    }
  }
  // Home > Sans titre > Conteneur 2 > Unify flex row > Conteneur
  .k-container-4 {
    &.outer-style {
      width: 100%;
      min-width: 0;
      justify-content: center;
      z-index: 27;
    }
    &.inner-style {
      max-width: 390px;
    }
    &.property-style {
      color: #ffffffff;
      background-color: #0e0e0ebd;
    }
  }
  // Home > Sans titre > Conteneur 2 > Unify flex row > Conteneur > Image
  .k-image-3 {
    &.outer-style {
      transition-property: transform;
      transition-duration: 0.6s;
      transition-timing-function: ease;
      background-size: cover;
      width: 100%;
      min-width: 0;
      z-index: 29;
      &.state-hover {
        transform: scale(1.074, 1.074);
      }
    }
  }
  .k-container-4 {
    &.state-hover {
      .k-image-3 {
        &.outer-style {
          transform: scale(1.074, 1.074);
        }
      }
    }
  }
  // Home > Sans titre > Conteneur 2 > Unify flex row > Conteneur > Texte
  .k-text-3 {
    &.outer-style {
      z-index: 28;
    }
    &.property-style {
      overflow: hidden;
      color: #ffffffff;
      font-size: 27px;
      text-align: center;
      padding: 15px;
    }
  }
  // Home > Sans titre > Conteneur 2 > Unify flex row > Conteneur > Texte
  .k-text-4 {
    &.outer-style {
      z-index: 27;
    }
    &.property-style {
      overflow: hidden;
      color: #c8c7c7ff;
      font-size: 19px;
      text-align: center;
      padding: 15px;
    }
  }
  // Home > Sans titre > Conteneur 2 > Unify flex row > Conteneur > Bouton
  .k-bouton {
    &.outer-style {
      width: 100%;
      min-width: 0;
      padding: 5px;
      z-index: 26;
    }
    &.property-style {
      color: #ffffffff;
      border-radius: 4px;
      overflow: hidden;
      font-size: 24px;
      text-align: center;
      padding: 5px 15px 5px 15px;
      cursor: pointer;
    }
  }
  // Home > Sans titre > Conteneur 2 > Unify flex row > Conteneur
  .k-container-5 {
    &.outer-style {
      width: 100%;
      min-width: 0;
      justify-content: center;
      z-index: 27;
    }
    &.inner-style {
      max-width: 390px;
    }
    &.property-style {
      color: #ffffffff;
      background-color: #0e0e0ebd;
    }
  }
  // Home > Sans titre > Conteneur 2 > Unify flex row > Conteneur > Image
  .k-image-4 {
    &.outer-style {
      transition-property: transform;
      transition-duration: 0.6s;
      transition-timing-function: ease;
      background-size: cover;
      width: 100%;
      min-width: 0;
      z-index: 29;
      &.state-hover {
        transform: scale(1.074, 1.074);
      }
    }
  }
  .k-container-5 {
    &.state-hover {
      .k-image-4 {
        &.outer-style {
          transform: scale(1.074, 1.074);
        }
      }
    }
  }
  // Home > Sans titre > Conteneur 2 > Unify flex row > Conteneur > Texte
  .k-text-5 {
    &.outer-style {
      z-index: 28;
    }
    &.property-style {
      overflow: hidden;
      color: #ffffffff;
      font-size: 27px;
      text-align: center;
      padding: 15px;
    }
  }
  // Home > Sans titre > Conteneur 2 > Unify flex row > Conteneur > Texte
  .k-text-6 {
    &.outer-style {
      z-index: 27;
    }
    &.property-style {
      overflow: hidden;
      color: #c8c7c7ff;
      font-size: 19px;
      text-align: center;
      padding: 15px;
    }
  }
  // Home > Sans titre > Conteneur 2 > Unify flex row > Conteneur > Bouton
  .k-button-9 {
    &.outer-style {
      width: 100%;
      min-width: 0;
      padding: 5px;
      z-index: 26;
    }
    &.property-style {
      color: #ffffffff;
      border-radius: 4px;
      overflow: hidden;
      font-size: 24px;
      text-align: center;
      padding: 5px 15px 5px 15px;
      cursor: pointer;
    }
  }
  // Home > Sans titre > Conteneur 2 > Unify flex row > Conteneur
  .k-container-6 {
    &.outer-style {
      width: 100%;
      min-width: 0;
      justify-content: center;
      z-index: 26;
    }
    &.inner-style {
      max-width: 390px;
    }
    &.property-style {
      color: #ffffffff;
      background-color: #0e0e0ebd;
    }
  }
  // Home > Sans titre > Conteneur 2 > Unify flex row > Conteneur > Image
  .k-image-5 {
    &.outer-style {
      transition-property: transform;
      transition-duration: 0.6s;
      transition-timing-function: ease;
      background-size: cover;
      width: 100%;
      min-width: 0;
      z-index: 29;
      &.state-hover {
        transform: scale(1.074, 1.074);
      }
    }
  }
  .k-container-6 {
    &.state-hover {
      .k-image-5 {
        &.outer-style {
          transform: scale(1.074, 1.074);
        }
      }
    }
  }
  // Home > Sans titre > Conteneur 2 > Unify flex row > Conteneur > Texte
  .k-text-7 {
    &.outer-style {
      z-index: 28;
    }
    &.property-style {
      overflow: hidden;
      color: #ffffffff;
      font-size: 27px;
      text-align: center;
      padding: 15px;
    }
  }
  // Home > Sans titre > Conteneur 2 > Unify flex row > Conteneur > Texte
  .k-text-8 {
    &.outer-style {
      z-index: 27;
    }
    &.property-style {
      overflow: hidden;
      color: #c8c7c7ff;
      font-size: 19px;
      text-align: center;
      padding: 15px;
    }
  }
  // Home > Sans titre > Conteneur 2 > Unify flex row > Conteneur > Bouton
  .k-button-10 {
    &.outer-style {
      width: 100%;
      min-width: 0;
      padding: 5px;
      z-index: 26;
    }
    &.property-style {
      color: #ffffffff;
      border-radius: 4px;
      overflow: hidden;
      font-size: 24px;
      text-align: center;
      padding: 5px 15px 5px 15px;
      cursor: pointer;
    }
  }
  // Home > Sans titre > Conteneur 3
  .k-conteneur-3 {
    &.outer-style {
      background-image: url(https://ucarecdn.com/dc9e4a2b-f642-4a19-97ac-c6e2d1ddf125/-/preview/-/quality/smart/);
      background-repeat: no-repeat;
      background-position: 50% 50%;
      background-size: cover;
      width: 100%;
      min-width: 0;
      z-index: 27;
    }
    &.property-style {
      padding: 80px 0 80px 0;
    }
  }
  // Home > Sans titre > Conteneur 3 > Texte
  .k-text-9 {
    &.outer-style {
      width: 100%;
      min-width: 0;
      z-index: 30;
    }
    &.property-style {
      overflow: hidden;
      color: #ffffffff;
      font-size: 67px;
      font-family: TimesNewRoman, 'Times New Roman', Times, Baskerville, Georgia,
        serif;
      font-weight: bold;
      text-align: center;
      text-shadow: 0px 5px 5px rgba(0, 0, 0, 0.2),
        0px 8px 10px rgba(0, 0, 0, 0.14), 0px 3px 14px rgba(0, 0, 0, 0.12);
      text-transform: uppercase;
      padding: 15px 15px 0 15px;
    }
    @include media-breakpoint-down(xs) {
      &.property-style {
        font-size: 36px;
      }
    }
  }
  // Home > Sans titre > Conteneur 3 > Image
  .k-image-6 {
    &.outer-style {
      background-size: contain;
      height: 66px;
      width: 100%;
      min-height: 66px;
      min-width: 0;
      justify-content: center;
      z-index: 29;
    }
    &.inner-style {
      height: 100%;
      width: auto;
    }
    &.template-style {
      max-height: 66px;
    }
  }
  // Home > Sans titre > Conteneur 3 > Unify flex row
  .k-container-7 {
    &.outer-style {
      width: 100%;
      min-width: 0;
      justify-content: center;
      padding: 40px 13px 80px 10px;
      z-index: 28;
    }
    &.inner-style {
      max-width: 840px;
    }
    &.property-style {
      color: #ffffffff;
      background-color: #080808bd;
      border-width: 2px 0 2px 0;
      border-color: #bfa251b8;
      border-style: ridge;
      padding: 35px 32px 35px 29px;
    }
    @include media-breakpoint-down(xs) {
      &.property-style {
        padding: 35px 25px 35px 25px;
      }
    }
  }
  // Home > Sans titre > Conteneur 3 > Unify flex row > Texte
  .k-text-10 {
    &.outer-style {
      width: 100%;
      min-width: 0;
      z-index: 30;
    }
    &.property-style {
      overflow: hidden;
      color: #c1c1c1ff;
      font-size: 22px;
      text-align: center;
      padding: 15px;
    }
  }
  // Home > Sans titre > Conteneur 3 > Unify flex row > Button 1
  .k-button-11 {
    &.outer-style {
      &.state-hover {
        .k-button-11 {
          &.property-style {
            color: #000000ff;
            background: linear-gradient(90deg, #ab8343ff, #f3ead2ff, #c8a773ff);
          }
        }
      }
      width: 100%;
      min-width: 0;
      padding: 13px 190px 13px 190px;
      z-index: 29;
    }
    &.property-style {
      color: #ffffffff;
      border: 2px solid #bfa251ff;
      font-size: 19px;
      font-weight: bold;
      text-align: center;
      text-transform: uppercase;
      box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.2),
        0px 3px 4px 0px rgba(0, 0, 0, 0.14),
        0px 3px 3px -2px rgba(0, 0, 0, 0.12);
      padding: 5px 0 5px 0;
      cursor: pointer;
    }
    @include media-breakpoint-down(xs) {
      &.outer-style {
        padding: 0;
      }
    }
  }
  // Home > Sans titre > Conteneur 3
  .k-container-8 {
    &.outer-style {
      background-image: url(https://ucarecdn.com/ec8b5908-d74b-45a9-8f00-5a2bef42da48/-/preview/-/quality/smart/);
      background-repeat: no-repeat;
      background-position: 50% 50%;
      background-size: cover;
      width: 100%;
      min-height: 100%;
      min-width: 0;
      padding: 127px 0 0 0;
      z-index: 26;
    }
    &.property-style {
      padding: 50px 0 0 0;
    }
  }
  // Home > Sans titre > Conteneur 3 > Texte
  .k-text-11 {
    &.outer-style {
      width: 100%;
      min-width: 0;
      z-index: 30;
    }
    &.property-style {
      overflow: hidden;
      color: #ffffffff;
      font-size: 67px;
      font-family: TimesNewRoman, 'Times New Roman', Times, Baskerville, Georgia,
        serif;
      font-weight: bold;
      text-align: center;
      text-shadow: 0px 5px 5px rgba(0, 0, 0, 0.2),
        0px 8px 10px rgba(0, 0, 0, 0.14), 0px 3px 14px rgba(0, 0, 0, 0.12);
      text-transform: uppercase;
      padding: 15px 15px 0 15px;
    }
  }
  // Home > Sans titre > Conteneur 3 > Image
  .k-image-7 {
    &.outer-style {
      background-size: contain;
      height: 66px;
      width: 100%;
      min-height: 66px;
      min-width: 0;
      justify-content: center;
      z-index: 29;
    }
    &.inner-style {
      height: 100%;
      width: auto;
    }
    &.template-style {
      max-height: 66px;
    }
  }
  // Home > Sans titre > Conteneur 3 > Unify flex row
  .k-container-9 {
    &.outer-style {
      width: 100%;
      min-width: 0;
      justify-content: center;
      padding: 40px 0 80px 0;
      z-index: 28;
    }
    &.inner-style {
      max-width: 840px;
    }
    &.property-style {
      color: #ffffffff;
      background-color: #080808bd;
      border-width: 2px 0 2px 0;
      border-color: #bfa251b8;
      border-style: ridge;
      padding: 35px 80px 35px 80px;
    }
    @include media-breakpoint-down(xs) {
      &.property-style {
        padding: 35px 40px 35px 40px;
      }
    }
  }
  // Home > Sans titre > Conteneur 3 > Unify flex row > Texte 1
  .k-texte-1 {
    &.outer-style {
      z-index: 30;
    }
    &.property-style {
      overflow: hidden;
      font-size: 28px;
      font-family: TimesNewRoman, 'Times New Roman', Times, Baskerville, Georgia,
        serif;
      font-weight: bold;
      text-align: center;
      text-transform: uppercase;
      padding: 15px 15px 0 15px;
    }
  }
  // Home > Sans titre > Conteneur 3 > Unify flex row > Texte
  .k-text-12 {
    &.outer-style {
      width: 100%;
      min-width: 0;
      z-index: 29;
    }
    &.property-style {
      overflow: hidden;
      color: #c1c1c1ff;
      font-size: 22px;
      text-align: center;
      padding: 15px;
    }
  }
  // Home > Sans titre > Conteneur 3 > Unify flex row > Button 1
  .k-button-12 {
    &.outer-style {
      &.state-hover {
        .k-button-12 {
          &.property-style {
            color: #000000ff;
            background: linear-gradient(90deg, #ab8343ff, #f3ead2ff, #c8a773ff);
          }
        }
      }
      width: 100%;
      min-width: 0;
      justify-content: center;
      padding: 5px;
      z-index: 28;
    }
    &.inner-style {
      max-width: 214px;
    }
    &.property-style {
      color: #ffffffff;
      border: 2px solid #bfa251ff;
      font-size: 19px;
      font-weight: bold;
      text-align: center;
      text-transform: uppercase;
      box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.2),
        0px 3px 4px 0px rgba(0, 0, 0, 0.14),
        0px 3px 3px -2px rgba(0, 0, 0, 0.12);
      padding: 5px 0 5px 0;
      cursor: pointer;
    }
  }
  // Home > Sans titre > Conteneur 5
  .k-conteneur-5 {
    &.outer-style {
      width: 100%;
      min-width: 0;
      padding: 40px 0 79px 0;
      z-index: 25;
    }
  }
  // Home > Sans titre > Conteneur 5 > Texte
  .k-text-13 {
    &.outer-style {
      width: 100%;
      min-width: 0;
      z-index: 30;
    }
    &.property-style {
      overflow: hidden;
      color: #ffffffff;
      font-size: 67px;
      font-family: TimesNewRoman, 'Times New Roman', Times, Baskerville, Georgia,
        serif;
      font-weight: bold;
      text-align: center;
      text-shadow: 0px 5px 5px rgba(0, 0, 0, 0.2),
        0px 8px 10px rgba(0, 0, 0, 0.14), 0px 3px 14px rgba(0, 0, 0, 0.12);
      text-transform: uppercase;
      padding: 15px 15px 0 15px;
    }
  }
  // Home > Sans titre > Conteneur 5 > Image
  .k-image-8 {
    &.outer-style {
      background-size: contain;
      height: 66px;
      width: 100%;
      min-height: 66px;
      min-width: 0;
      justify-content: center;
      z-index: 29;
    }
    &.inner-style {
      height: 100%;
      width: auto;
    }
    &.template-style {
      max-height: 66px;
    }
  }
  // Home > Sans titre > Conteneur 5 > Unify flex row
  .k-container-10 {
    &.outer-style {
      width: 100%;
      min-width: 0;
      justify-content: center;
      padding: 65px 0 0 0;
      z-index: 25;
    }
    &.inner-style {
      max-width: 1400px;
    }
    @include media-breakpoint-down(xs) {
      &.outer-style {
        padding: 30px 0 0 0;
      }
    }
  }
  // Home > Sans titre > Conteneur 5 > Unify flex row > Conteneur
  .k-container-11 {
    &.outer-style {
      height: 270px;
      width: 33.33%;
      min-height: 270px;
      min-width: 0;
      padding: 0 30px 0 30px;
      z-index: 28;
    }
    &.inner-style {
      height: 100%;
    }
    &.property-style {
      background-image: url(https://ucarecdn.com/46548569-e2ac-445f-9a09-7fcaf58b1221/-/preview/-/quality/smart/);
      background-repeat: no-repeat;
      background-position: 50% 50%;
      background-size: contain;
    }
    &.template-style {
      max-height: 270px;
    }
    @include media-breakpoint-down(xs) {
      &.outer-style {
        height: auto;
        width: 100%;
        overflow: inherit;
      }
      &.inner-style {
        height: auto;
      }
      &.template-style {
        max-width: none;
        max-height: none;
      }
    }
  }
  // Home > Sans titre > Conteneur 5 > Unify flex row > Conteneur > Image
  .k-image-9 {
    &.outer-style {
      background-size: contain;
      height: 100%;
      width: 100%;
      min-height: 0;
      min-width: 0;
      z-index: 30;
    }
    &.inner-style {
      height: 100%;
    }
    &.property-style {
      padding: 78px 0 73px 0;
      cursor: pointer;
    }
  }
  // Home > Sans titre > Conteneur 5 > Unify flex row > Conteneur
  .k-container-12 {
    &.outer-style {
      height: 270px;
      width: 33.33%;
      min-height: 270px;
      min-width: 0;
      padding: 0 30px 0 30px;
      z-index: 27;
    }
    &.inner-style {
      height: 100%;
    }
    &.property-style {
      background-image: url(https://ucarecdn.com/475ad01f-6310-45e4-baf8-89f7d5d01a62/-/preview/-/quality/smart/);
      background-repeat: no-repeat;
      background-position: 50% 50%;
      background-size: contain;
    }
    &.template-style {
      max-height: 270px;
    }
    @include media-breakpoint-down(xs) {
      &.outer-style {
        height: auto;
        width: 100%;
        overflow: inherit;
      }
      &.inner-style {
        height: auto;
      }
      &.template-style {
        max-width: none;
        max-height: none;
      }
    }
  }
  // Home > Sans titre > Conteneur 5 > Unify flex row > Conteneur > Image
  .k-image-10 {
    &.outer-style {
      background-size: contain;
      height: 100%;
      width: 100%;
      min-height: 0;
      min-width: 0;
      z-index: 30;
    }
    &.inner-style {
      height: 100%;
    }
    &.property-style {
      padding: 78px 0 73px 0;
      cursor: pointer;
    }
  }
  // Home > Sans titre > Conteneur 5 > Unify flex row > Conteneur
  .k-container-13 {
    &.outer-style {
      height: 270px;
      width: 33.33%;
      min-height: 270px;
      min-width: 0;
      padding: 0 30px 0 30px;
      z-index: 27;
    }
    &.inner-style {
      height: 100%;
    }
    &.property-style {
      background-image: url(https://ucarecdn.com/fae231bf-fd45-4bdb-b807-344defd22905/-/preview/-/quality/smart/);
      background-repeat: no-repeat;
      background-position: 50% 50%;
      background-size: contain;
    }
    &.template-style {
      max-height: 270px;
    }
    @include media-breakpoint-down(xs) {
      &.outer-style {
        height: auto;
        width: 100%;
        overflow: inherit;
      }
      &.inner-style {
        height: auto;
      }
      &.template-style {
        max-width: none;
        max-height: none;
      }
    }
  }
  // Home > Sans titre > Conteneur 5 > Unify flex row > Conteneur > Image
  .k-image-11 {
    &.outer-style {
      background-size: contain;
      height: 100%;
      width: 100%;
      min-height: 0;
      min-width: 0;
      z-index: 30;
    }
    &.inner-style {
      height: 100%;
    }
    &.property-style {
      padding: 78px 0 73px 0;
      cursor: pointer;
    }
  }
  // Home > Sans titre > Conteneur 5 > Unify flex row > Conteneur
  .k-container-14 {
    &.outer-style {
      height: 270px;
      width: 33.33%;
      min-height: 270px;
      min-width: 0;
      padding: 0 30px 0 30px;
      z-index: 26;
    }
    &.inner-style {
      height: 100%;
    }
    &.property-style {
      background-image: url(https://ucarecdn.com/fc29c5f0-be64-4acb-93da-7f3fe6447f8c/-/preview/-/quality/smart/);
      background-repeat: no-repeat;
      background-position: 50% 50%;
      background-size: contain;
    }
    &.template-style {
      max-height: 270px;
    }
    @include media-breakpoint-down(xs) {
      &.outer-style {
        height: auto;
        width: 100%;
        overflow: inherit;
      }
      &.inner-style {
        height: auto;
      }
      &.template-style {
        max-width: none;
        max-height: none;
      }
    }
  }
  // Home > Sans titre > Conteneur 5 > Unify flex row > Conteneur
  .k-container-15 {
    &.outer-style {
      height: 270px;
      width: 33.33%;
      min-height: 270px;
      min-width: 0;
      padding: 0 30px 0 30px;
      z-index: 26;
    }
    &.inner-style {
      height: 100%;
    }
    &.property-style {
      background-image: url(https://ucarecdn.com/65797ba9-3ef5-4c9d-b3ff-a1f570a6a1f7/-/preview/-/quality/smart/);
      background-repeat: no-repeat;
      background-position: 50% 50%;
      background-size: contain;
    }
    &.template-style {
      max-height: 270px;
    }
    @include media-breakpoint-down(xs) {
      &.outer-style {
        height: auto;
        width: 100%;
        overflow: inherit;
      }
      &.inner-style {
        height: auto;
      }
      &.template-style {
        max-width: none;
        max-height: none;
      }
    }
  }
  // Home > Sans titre > Conteneur 5 > Unify flex row > Conteneur
  .k-container-16 {
    &.outer-style {
      height: 270px;
      width: 33.33%;
      min-height: 270px;
      min-width: 0;
      padding: 0 30px 0 30px;
      z-index: 25;
    }
    &.inner-style {
      height: 100%;
    }
    &.property-style {
      background-image: url(https://ucarecdn.com/ce99cb98-0670-4d89-895d-8a50516301ce/-/preview/-/quality/smart/);
      background-repeat: no-repeat;
      background-position: 50% 50%;
      background-size: contain;
    }
    &.template-style {
      max-height: 270px;
    }
    @include media-breakpoint-down(xs) {
      &.outer-style {
        height: auto;
        width: 100%;
        overflow: inherit;
      }
      &.inner-style {
        height: auto;
      }
      &.template-style {
        max-width: none;
        max-height: none;
      }
    }
  }
  // Home > Sans titre > Conteneur 6
  .k-conteneur-6 {
    &.outer-style {
      background-image: url(https://ucarecdn.com/fbac2cbf-7c9a-4e03-b0ab-77a30032d628/-/preview/-/quality/smart/);
      background-repeat: no-repeat;
      background-position: 50% 50%;
      background-size: cover;
      width: 100%;
      min-width: 0;
      justify-content: center;
      z-index: 24;
    }
    &.inner-style {
      max-width: 1300px;
    }
    &.property-style {
      padding: 101px 0 100px 0;
    }
  }
  // Home > Sans titre > Conteneur 6 > Texte
  .k-text-14 {
    &.outer-style {
      width: 100%;
      min-width: 0;
      z-index: 30;
    }
    &.property-style {
      overflow: hidden;
      color: #ffffffff;
      font-size: 37px;
      font-family: TimesNewRoman, 'Times New Roman', Times, Baskerville, Georgia,
        serif;
      font-weight: bold;
      text-align: center;
      padding: 15px;
    }
    @include media-breakpoint-down(xs) {
      &.property-style {
        font-size: 18px;
      }
    }
  }
  // Home > Sans titre > Conteneur 6 > Texte
  .k-text-15 {
    &.outer-style {
      width: 100%;
      min-width: 0;
      z-index: 29;
    }
    &.property-style {
      overflow: hidden;
      color: #ffffffff;
      font-size: 18px;
      text-align: center;
      padding: 15px;
    }
  }
  // Home > Sans titre > Footer
  .k-footer {
    &.outer-style {
      background-color: #000000ff;
      width: 100%;
      min-width: 0;
      justify-content: center;
      z-index: 23;
    }
    &.inner-style {
      max-width: 1700px;
    }
    &.property-style {
      color: #ffffffff;
      font-size: 11px;
      padding: 40px 0 0 0;
    }
    @include media-breakpoint-down(xs) {
      &.property-style {
        padding: 0 0 0 0;
      }
    }
  }
  // Home > Sans titre > Footer > Conteneur 1
  .k-container-17 {
    &.outer-style {
      width: 50%;
      min-width: 0;
      z-index: 30;
    }
    &.property-style {
      padding: 21px 0 0 0;
    }
    @include media-breakpoint-down(xs) {
      &.outer-style {
        width: 100%;
        overflow: inherit;
      }
      &.template-style {
        max-width: none;
      }
    }
  }
  // Home > Sans titre > Footer > Conteneur 1 > Image
  .k-image-12 {
    &.outer-style {
      background-size: contain;
      height: 85px;
      width: 100%;
      min-height: 85px;
      min-width: 0;
      z-index: 30;
    }
    &.inner-style {
      height: 100%;
    }
    &.property-style {
      padding: 5px 0 18px 0;
    }
    &.template-style {
      max-height: 85px;
    }
    @include media-breakpoint-down(xs) {
      &.outer-style {
        height: 40px;
        min-height: 40px;
        overflow: inherit;
      }
      &.template-style {
        max-height: 40px;
      }
      &.property-style {
        padding: 0 0 6px 0;
      }
    }
  }
  // Home > Sans titre > Footer > Conteneur 1 > Conteneur
  .k-container-18 {
    &.outer-style {
      width: 100%;
      min-width: 0;
      justify-content: center;
      z-index: 29;
    }
    &.inner-style {
      width: auto;
    }
    @include media-breakpoint-down(xs) {
      &.outer-style {
        height: 6.5px;
        width: 38%;
        min-height: 6.5px;
        overflow: inherit;
      }
      &.inner-style {
        height: 100%;
      }
      &.template-style {
        max-width: none;
        max-height: 6.5px;
      }
    }
  }
  // Home > Sans titre > Footer > Conteneur 1 > Conteneur > Image
  .k-image-13 {
    &.outer-style {
      background-size: contain;
      height: 90.5px;
      width: 100%;
      min-height: 90.5px;
      min-width: 0;
      max-width: 222px;
      z-index: 30;
    }
    &.inner-style {
      height: 100%;
    }
    &.property-style {
      padding: 0 21px 0 18px;
    }
    &.template-style {
      max-height: 90.5px;
    }
  }
  // Home > Sans titre > Footer > Conteneur 1 > Conteneur > Image
  .k-image-14 {
    &.outer-style {
      background-size: contain;
      height: 90.5px;
      width: 100%;
      min-height: 90.5px;
      min-width: 0;
      max-width: 222px;
      z-index: 29;
    }
    &.inner-style {
      height: 100%;
    }
    &.property-style {
      padding: 0 14px 0 5px;
    }
    &.template-style {
      max-height: 90.5px;
    }
  }
  // Home > Sans titre > Footer > Conteneur 1
  .k-container-19 {
    &.outer-style {
      width: 100%;
      min-width: 0;
      z-index: 29;
    }
    @include media-breakpoint-down(xs) {
      &.outer-style {
        align-items: center;
      }
      &.inner-style {
        max-height: 285px;
        height: 100%;
      }
      &.property-style {
        padding: 0 25px 0 25px;
      }
    }
  }
  // Home > Sans titre > Footer > Conteneur 1 > Conteneur 1
  .k-container-20 {
    &.outer-style {
      width: 100%;
      min-width: 0;
      z-index: 30;
    }
  }
  // Home > Sans titre > Footer > Conteneur 1 > Conteneur 1 > Texte
  .k-text-16 {
    &.outer-style {
      position: absolute;
      z-index: 30;
      inset: 26px auto auto calc(50% + 0px);
      transform: translateX(-50%);
    }
    &.property-style {
      overflow: hidden;
      color: #dbdbdbff;
      font-weight: bold;
      text-align: center;
      text-transform: uppercase;
      padding: 15px;
      cursor: pointer;
    }
  }
  // Home > Sans titre > Footer > Conteneur 1 > Conteneur 1 > Image
  .k-image-15 {
    &.outer-style {
      background-size: contain;
      height: 128px;
      width: 100%;
      min-height: 128px;
      min-width: 0;
      padding: 0 0 19px 0;
      z-index: 29;
    }
    &.inner-style {
      height: 100%;
    }
    &.property-style {
      padding: 5px 0 5px 0;
    }
    &.template-style {
      max-height: 128px;
    }
    @include media-breakpoint-down(xs) {
      &.outer-style {
        height: 40px;
        min-height: 40px;
        overflow: inherit;
      }
      &.template-style {
        max-height: 40px;
      }
      &.property-style {
        padding: 0 0 6px 0;
      }
    }
  }
  // Home > Sans titre > Footer > Conteneur 1 > Unify flex row
  .k-container-21 {
    &.outer-style {
      width: 100%;
      min-width: 0;
      justify-content: center;
      z-index: 29;
    }
    &.inner-style {
      width: auto;
    }
    @include media-breakpoint-down(xs) {
      &.property-style {
        text-align: center;
      }
    }
  }
  // Home > Sans titre > Footer > Conteneur 1 > Unify flex row > Texte 1
  .k-text-17 {
    &.outer-style {
      height: 40px;
      min-height: 40px;
      z-index: 30;
    }
    &.inner-style {
      height: 100%;
    }
    &.property-style {
      overflow: hidden;
      color: #abababff;
      font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
      line-height: 36px;
      padding: 15px;
      cursor: pointer;
    }
    &.template-style {
      max-height: 40px;
    }
    @include media-breakpoint-down(xs) {
      &.outer-style {
        height: auto;
        min-height: inherit;
        overflow: inherit;
      }
      &.inner-style {
        height: auto;
      }
      &.template-style {
        max-height: none;
      }
      &.property-style {
        padding: 0;
      }
    }
  }
  // Home > Sans titre > Footer > Conteneur 1 > Unify flex row > Texte 1
  .k-text-18 {
    &.outer-style {
      height: 40px;
      min-height: 40px;
      z-index: 30;
    }
    &.inner-style {
      height: 100%;
    }
    &.property-style {
      overflow: hidden;
      color: #abababff;
      font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
      line-height: 36px;
      padding: 15px;
      cursor: pointer;
    }
    &.template-style {
      max-height: 40px;
    }
    @include media-breakpoint-down(xs) {
      &.outer-style {
        height: auto;
        min-height: inherit;
        overflow: inherit;
      }
      &.inner-style {
        height: auto;
      }
      &.template-style {
        max-height: none;
      }
      &.property-style {
        padding: 0;
      }
    }
  }
  // Home > Sans titre > Footer > Conteneur 1 > Unify flex row > Texte 1
  .k-text-19 {
    &.outer-style {
      height: 40px;
      min-height: 40px;
      z-index: 30;
    }
    &.inner-style {
      height: 100%;
    }
    &.property-style {
      overflow: hidden;
      color: #abababff;
      font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
      line-height: 36px;
      padding: 15px;
      cursor: pointer;
    }
    &.template-style {
      max-height: 40px;
    }
    @include media-breakpoint-down(xs) {
      &.outer-style {
        height: auto;
        min-height: inherit;
        overflow: inherit;
      }
      &.inner-style {
        height: auto;
      }
      &.template-style {
        max-height: none;
      }
      &.property-style {
        padding: 0;
      }
    }
  }
  // Home > Sans titre > Footer > Conteneur 1 > Unify flex row > Texte 1
  .k-text-20 {
    &.outer-style {
      height: 40px;
      min-height: 40px;
      z-index: 27;
    }
    &.inner-style {
      height: 100%;
    }
    &.property-style {
      overflow: hidden;
      color: #abababff;
      font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
      line-height: 36px;
      padding: 15px;
      cursor: pointer;
    }
    &.template-style {
      max-height: 40px;
    }
    @include media-breakpoint-down(xs) {
      &.outer-style {
        height: auto;
        min-height: inherit;
        overflow: inherit;
      }
      &.inner-style {
        height: auto;
      }
      &.template-style {
        max-height: none;
      }
      &.property-style {
        padding: 0;
      }
    }
  }
  // Home > Sans titre > Footer > Conteneur 1 > Texte
  .k-text-21 {
    &.outer-style {
      z-index: 28;
    }
    &.property-style {
      overflow: hidden;
      color: #b3b3b3ff;
      text-align: center;
      padding: 15px;
    }
  }
  // Home > Sans titre > Footer > Conteneur 2
  .k-container-22 {
    &.outer-style {
      width: 50%;
      min-width: 0;
      justify-content: end;
      z-index: 28;
    }
    &.inner-style {
      width: auto;
    }
    &.property-style {
      padding: 26px 0 0 0;
    }
    @include media-breakpoint-down(xs) {
      &.outer-style {
        width: 100%;
        justify-content: center;
        overflow: inherit;
      }
      &.template-style {
        max-width: none;
      }
    }
  }
  // Home > Sans titre > Footer > Conteneur 2 > Image
  .k-image-16 {
    &.outer-style {
      background-size: contain;
      z-index: 30;
    }
    @include media-breakpoint-down(xs) {
      &.outer-style {
        order: 1;
        width: 100%;
        min-width: 0;
        overflow: inherit;
        z-index: 29;
      }
      &.template-style {
        max-width: none;
      }
    }
  }
  // Home > Sans titre > Footer > Conteneur 2 > Unify flex row
  .k-container-23 {
    &.outer-style {
      padding: 0 20px 0 20px;
      z-index: 29;
    }
    @include media-breakpoint-down(xs) {
      &.outer-style {
        order: 0;
        width: 100%;
        min-width: 0;
        justify-content: center;
        overflow: inherit;
        padding: 10px 0 15px 0;
        z-index: 30;
      }
      &.inner-style {
        max-width: 271px;
      }
      &.template-style {
        max-width: none;
      }
      &.property-style {
        padding: 0 0 0 0;
      }
    }
  }
  // Home > Sans titre > Footer > Conteneur 2 > Unify flex row > Icône
  .k-icone {
    &.outer-style {
      width: 100%;
      min-width: 0;
      padding: 10px;
      z-index: 29;
    }
    &.property-style {
      color: #b5b5b5ff;
      font-size: 27px;
      text-align: center;
      cursor: pointer;
    }
  }
  // Home > Sans titre > Footer > Conteneur 2 > Unify flex row > Icône
  .k-icon-1 {
    &.outer-style {
      width: 100%;
      min-width: 0;
      padding: 10px;
      z-index: 28;
    }
    &.property-style {
      color: #b5b5b5ff;
      font-size: 27px;
      text-align: center;
      cursor: pointer;
    }
  }
  // Home > Sans titre > Footer > Conteneur 2 > Unify flex row > Icône
  .k-icon-2 {
    &.outer-style {
      width: 100%;
      min-width: 0;
      padding: 10px;
      z-index: 27;
    }
    &.property-style {
      color: #b5b5b5ff;
      font-size: 27px;
      text-align: center;
      cursor: pointer;
    }
  }
  // Home > Sans titre > Footer > Conteneur 2 > Unify flex row > Icône
  .k-icon-3 {
    &.outer-style {
      width: 100%;
      min-width: 0;
      padding: 10px;
      z-index: 27;
    }
    &.property-style {
      color: #b5b5b5ff;
      font-size: 27px;
      text-align: center;
      cursor: pointer;
    }
  }
  // Home > Sans titre > Footer > Conteneur 2 > Unify flex row > Icône
  .k-icon-4 {
    &.outer-style {
      width: 100%;
      min-width: 0;
      padding: 10px;
      z-index: 26;
    }
    &.property-style {
      color: #b5b5b5ff;
      font-size: 27px;
      text-align: center;
      cursor: pointer;
    }
  }
}
</style>
