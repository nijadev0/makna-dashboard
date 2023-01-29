<script setup>
import { ref } from 'vue'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'

import Layout from '$components/templates/Layout.vue'
import ChatList from '$components/moleculs/chat/List.vue'
import ChatMessage from '$components/moleculs/chat/Message.vue'
import ChatProfile from '$components/moleculs/chat/Profile.vue'

import {
  SearchNormalIcon,
  FilterIcon,
  Bag2Icon,
  LinkIcon,
  SendIcon,
  CloseXIcon,
  TagRightIcon,
  ArrowDownIcon,
  EmojiHappyIcon
} from '$assets/icons/linear'

/**
 * Empty/Loaded Chat
 */
const chatRef = ref(false)

function openChat() {
  chatRef.value = true
}

function closeChat() {
  chatRef.value = false
}

/**
 * Show/Hide Contact Details
 */
const contactDetailRef = ref(false)

function openDetail() {
  contactDetailRef.value = true
}

function closeDetail() {
  contactDetailRef.value = false
}

const chatListData = [
  {
    avatar: '/topbar-user-photo.png',
    code: '#122212',
    stamp: '12 days ago',
    message:
      'Does payment on Uno Music could uses a home credit or something like that? Paypal for example?',
    total: '4'
  },
  {
    avatar: '/topbar-user-photo.png',
    code: '#122212',
    stamp: '12 days ago',
    message:
      'Does payment on Uno Music could uses a home credit or something like that? Paypal for example?',
    total: '4'
  },
  {
    avatar: '/topbar-user-photo.png',
    code: '#122212',
    stamp: '12 days ago',
    message:
      'Does payment on Uno Music could uses a home credit or something like that? Paypal for example?',
    total: '4'
  },
  {
    avatar: '/topbar-user-photo.png',
    code: '#122212',
    stamp: '12 days ago',
    message:
      'Does payment on Uno Music could uses a home credit or something like that? Paypal for example?',
    total: '4'
  },
  {
    avatar: '/topbar-user-photo.png',
    code: '#122212',
    stamp: '12 days ago',
    message:
      'Does payment on Uno Music could uses a home credit or something like that? Paypal for example?',
    total: '4'
  },
  {
    avatar: '/topbar-user-photo.png',
    code: '#122212',
    stamp: '12 days ago',
    message:
      'Does payment on Uno Music could uses a home credit or something like that? Paypal for example?',
    total: '4'
  },
  {
    avatar: '/topbar-user-photo.png',
    code: '#122212',
    stamp: '12 days ago',
    message:
      'Does payment on Uno Music could uses a home credit or something like that? Paypal for example?',
    total: '4'
  },
  {
    avatar: '/topbar-user-photo.png',
    code: '#122212',
    stamp: '12 days ago',
    message:
      'Does payment on Uno Music could uses a home credit or something like that? Paypal for example?',
    total: '4'
  },
  {
    avatar: '/topbar-user-photo.png',
    code: '#122212',
    stamp: '12 days ago',
    message:
      'Does payment on Uno Music could uses a home credit or something like that? Paypal for example?',
    total: '4'
  }
]
</script>

<template>
  <Layout title="Conversations">
    <div
      class="Conversation flex h-[85vh] w-full items-start overflow-hidden rounded-3xl bg-white"
    >
      <!-- Grid: Left -->
      <section
        class="Conversation_Grid-Left h-[85vh] w-[27rem] overflow-y-hidden border-r border-netral-300"
      >
        <div class="Actions flex items-center justify-between gap-2.5 p-4">
          <div class="Search relative">
            <!-- Icon -->
            <SearchNormalIcon
              class="absolute top-1/2 left-4 z-10 h-6 w-6 -translate-y-1/2 stroke-[1.5px] text-netral-800"
            />
            <!-- Input -->
            <input
              type="text"
              placeholder="Search here..."
              class="Input relative z-0 w-full rounded-full bg-netral-200 py-2.5 pr-4 pl-14 text-base leading-5 outline-none placeholder:text-[#6F757A]"
            />
          </div>

          <div
            class="Filter flex h-10 w-full max-w-[2.5rem] items-center justify-center rounded-full bg-netral-200"
          >
            <FilterIcon class="h-6 w-6 stroke-[1.5px] text-netral-800" />
          </div>
        </div>

        <!-- Tab List -->
        <div class="Tab-List flex w-full justify-between px-4 pt-1.5 pb-5">
          <button
            class="Tab flex items-center gap-2 rounded-xl bg-[#FF3366]/10 px-2.5 py-3 text-sm font-semibold leading-none text-[#FF3366] transition-colors duration-500 ease-in-out hover:bg-[#FF3366]/25"
          >
            <span>Open</span>
            <span>9</span>
          </button>

          <button
            class="Tab flex items-center gap-2 rounded-xl bg-transparent px-2.5 py-3 text-sm font-semibold leading-none transition-colors duration-500 ease-in-out hover:bg-netral-300/50"
          >
            <span>Handling</span>
            <span>9</span>
          </button>

          <button
            class="Tab flex items-center gap-2 rounded-xl bg-transparent px-2.5 py-3 text-sm font-semibold leading-none transition-colors duration-500 ease-in-out hover:bg-netral-300/50"
          >
            <span>Resolved</span>
            <span>12</span>
          </button>
        </div>

        <div class="h-px w-full bg-netral-300" />

        <div id="Chat-List" @click="openChat" class="h-[48rem] overflow-y-auto">
          <ChatList
            v-for="{ avatar, code, stamp, message, total } in chatListData"
            :avatar="avatar"
            :code="code"
            :stamp="stamp"
            :message="message"
            :total="total"
          />
        </div>
      </section>

      <!-- Grid: Right -->
      <section
        class="Conversation_Grid-Right grid h-full w-full grid-cols-7 overflow-hidden p-4"
      >
        <div
          class="Chat-Content relative h-full w-full"
          :class="contactDetailRef ? 'col-span-5 pr-4' : 'col-span-7'"
        >
          <!-- Chat: Empty -->
          <div
            v-if="!chatRef"
            class="Empty-Chat flex h-full w-full flex-col items-center justify-center rounded-2xl bg-netral-200"
          >
            <EmojiHappyIcon
              class="EmojiHappy-Icon mb-4 h-20 w-20 stroke-[#3B4453] stroke-[1.5px]"
            />

            <h5 class="text-base leading-5 text-[#101623]">
              Select chat to start messaging
            </h5>
          </div>

          <!-- Chat: Opened -->
          <div v-if="chatRef" class="h-full">
            <!-- User Profile -->

            <ChatProfile
              code="#122212"
              name="Supriyadi"
              phone="628812345678"
              :openDetail="openDetail"
              :closeDetail="closeDetail"
            />

            <!-- Chat: Content -->
            <section
              class="Chat-Text-Wrap my-4 flex h-[40rem] w-full flex-col gap-6 overflow-y-auto rounded-2xl bg-[#F4F5F6] p-4"
            >
              <ChatMessage
                variant="incoming"
                message="Hello, how are you?"
                date="23 Nov 2022 08:00"
              />

              <ChatMessage
                variant="outgoing"
                message=" Hello, Supriyadi! welcome to the Zeal Music's WhatsApp! Let me know what can I help you"
                date="23 Nov 2022 08:00"
              />

              <ChatMessage
                variant="incoming"
                message="Nothing, I just want to talk with you hehe..."
                date="23 Nov 2022 08:00"
              />

              <ChatMessage
                variant="outgoing"
                message="Oh... ok. What do you want to talk about?"
                date="23 Nov 2022 08:00"
              />

              <ChatMessage
                variant="incoming"
                message=" I just bought a musical book sometime ago, but I lost it.
                      What should I do? Should I to buy again at Zeal Music, or
                      just try to find it?"
                date="23 Nov 2022 08:00"
              />

              <ChatMessage
                variant="outgoing"
                message="Hahahaha. How so? I think it's better if you find it
                        first. If you couldn't find it, better if you ask police
                        to help you."
                date="23 Nov 2022 08:00"
              />
            </section>

            <!-- Actions -->
            <section
              class="Actions sticky bottom-0 flex w-full items-center gap-4 px-4"
            >
              <!-- Attach -->
              <div class="Attach flex gap-3 text-[#3B4453]">
                <Bag2Icon class="h-6 w-6 stroke-[1.5px]" />
                <LinkIcon class="h-6 w-6 stroke-[1.5px]" />
              </div>

              <!-- Send -->
              <form class="Send flex w-full gap-2">
                <input
                  class="Input w-full rounded-full bg-[#F4F5F6] px-4 py-2 text-sm leading-6 outline-none"
                  type="text"
                  placeholder="Type a message"
                />
                <button
                  type="submit"
                  class="Button flex h-10 w-full max-w-[40px] items-center justify-center rounded-full bg-[#192954]"
                >
                  <SendIcon class="h-6 w-6 stroke-[1.5px] text-white" />
                </button>
              </form>
            </section>
          </div>
        </div>

        <div
          class="Contact-Detail flex h-full w-full flex-col items-center overflow-y-auto border-l border-netral-300 pl-4"
          :class="contactDetailRef ? 'col-span-2' : 'hidden'"
        >
          <!-- Contact Detail -->
          <div
            class="Detail mb-10 flex w-full items-center justify-between text-[#212329]"
          >
            <h3 class="text-base font-semibold leading-5">Contact Details</h3>

            <button @click="closeDetail">
              <CloseXIcon class="CloseX-Icon h-6 w-6 stroke-[1.5px]" />
            </button>
          </div>

          <!-- User Profile -->
          <div
            class="Profile mb-6 flex w-full flex-col items-center justify-center"
          >
            <img
              class="Photo mb-4 h-24 w-24 rounded-full object-cover"
              src="/topbar-user-photo.png"
              alt="Topbar User Photo"
            />

            <h5 class="Name mb-1 text-xl font-semibold leading-7">Supriyadi</h5>
            <p class="Number leading-7 text-[#3B4453]">+628812345678</p>
          </div>

          <!-- Label -->
          <div
            class="Label-Wrap mb-10 flex w-56 flex-row flex-wrap justify-center gap-2"
          >
            <div
              class="Label flex w-fit items-center gap-2 rounded-full border border-netral-300 py-1.5 px-3"
            >
              <TagRightIcon
                class="CloseX-Icon h-4 w-4 fill-[#FF5630] stroke-none"
              />
              <span
                class="text-xs font-medium lowercase leading-4 text-[#3B4453]"
              >
                pengiriman
              </span>
            </div>

            <div
              class="Label flex w-fit items-center gap-2 rounded-full border border-netral-300 py-1.5 px-3"
            >
              <TagRightIcon
                class="CloseX-Icon h-4 w-4 fill-[#2BBE92] stroke-none"
              />
              <span
                class="text-xs font-medium lowercase leading-4 text-[#3B4453]"
              >
                order
              </span>
            </div>

            <div
              class="Label flex w-fit items-center gap-2 rounded-full border border-netral-300 py-1.5 px-3"
            >
              <TagRightIcon
                class="CloseX-Icon h-4 w-4 fill-[#1D9F22] stroke-none"
              />
              <span
                class="text-xs font-medium lowercase leading-4 text-[#3B4453]"
              >
                face-care
              </span>
            </div>

            <div
              class="Label flex w-fit items-center gap-2 rounded-full border border-netral-300 py-1.5 px-3"
            >
              <TagRightIcon
                class="CloseX-Icon h-4 w-4 fill-[#14A3AC] stroke-none"
              />
              <span
                class="text-xs font-medium lowercase leading-4 text-[#3B4453]"
              >
                Demo
              </span>
            </div>

            <div
              class="Label flex w-fit items-center gap-2 rounded-full border border-netral-300 py-1.5 px-3"
            >
              <TagRightIcon
                class="CloseX-Icon h-4 w-4 fill-[#B847CA] stroke-none"
              />
              <span
                class="text-xs font-medium lowercase leading-4 text-[#3B4453]"
              >
                Delivery
              </span>
            </div>
          </div>

          <!-- Accordion -->
          <div class="Accordion-Wrap w-full space-y-2">
            <Disclosure
              as="div"
              v-slot="{ open }"
              class="Accordion w-full rounded-2xl bg-netral-200 p-4 text-[#212329]"
            >
              <DisclosureButton
                class="Heading flex w-full items-center justify-between"
              >
                <h5 class="text-sm font-semibold leading-6">
                  Personal Informations
                </h5>

                <ArrowDownIcon
                  class="h-4 w-4 stroke-[1.5px]"
                  :class="open && 'rotate-180 transform'"
                />
              </DisclosureButton>

              <DisclosurePanel
                class="Panel flex w-full items-center justify-between pt-4 text-[13px] font-medium leading-6"
              >
                <h5 class="text-netral-900">Email</h5>
                <p class="text-netral-800">justan.example@gmail.com</p>
              </DisclosurePanel>
            </Disclosure>

            <Disclosure
              as="div"
              v-slot="{ open }"
              class="Accordion w-full rounded-2xl bg-netral-200 p-4 text-[#212329]"
            >
              <DisclosureButton
                class="Heading flex w-full items-center justify-between"
              >
                <h5 class="text-sm font-semibold leading-6">Platform Used</h5>

                <ArrowDownIcon
                  class="h-4 w-4 stroke-[1.5px]"
                  :class="open && 'rotate-180 transform'"
                />
              </DisclosureButton>

              <DisclosurePanel
                class="Panel flex w-full items-center justify-between pt-4 text-[13px] font-medium leading-6"
              >
                <h5 class="text-netral-900">Email</h5>
                <p class="text-netral-800">justan.example@gmail.com</p>
              </DisclosurePanel>
            </Disclosure>

            <Disclosure
              as="div"
              v-slot="{ open }"
              class="Accordion w-full rounded-2xl bg-netral-200 p-4 text-[#212329]"
            >
              <DisclosureButton
                class="Heading flex w-full items-center justify-between"
              >
                <h5 class="text-sm font-semibold leading-6">
                  Conversation Actions
                </h5>

                <ArrowDownIcon
                  class="h-4 w-4 stroke-[1.5px]"
                  :class="open && 'rotate-180 transform'"
                />
              </DisclosureButton>

              <DisclosurePanel
                class="Panel flex w-full items-center justify-between pt-4 text-[13px] font-medium leading-6"
              >
                <h5 class="text-netral-900">Email</h5>
                <p class="text-netral-800">justan.example@gmail.com</p>
              </DisclosurePanel>
            </Disclosure>

            <Disclosure
              as="div"
              v-slot="{ open }"
              class="Accordion w-full rounded-2xl bg-netral-200 p-4 text-[#212329]"
            >
              <DisclosureButton
                class="Heading flex w-full items-center justify-between"
              >
                <h5 class="text-sm font-semibold leading-6">Transactions</h5>

                <ArrowDownIcon
                  class="h-4 w-4 stroke-[1.5px]"
                  :class="open && 'rotate-180 transform'"
                />
              </DisclosureButton>

              <DisclosurePanel
                class="Panel flex w-full items-center justify-between pt-4 text-[13px] font-medium leading-6"
              >
                <h5 class="text-netral-900">Email</h5>
                <p class="text-netral-800">justan.example@gmail.com</p>
              </DisclosurePanel>
            </Disclosure>

            <Disclosure
              as="div"
              v-slot="{ open }"
              class="Accordion w-full rounded-2xl bg-netral-200 p-4 text-[#212329]"
            >
              <DisclosureButton
                class="Heading flex w-full items-center justify-between"
              >
                <h5 class="text-sm font-semibold leading-6">
                  Previous Conversations
                </h5>

                <ArrowDownIcon
                  class="h-4 w-4 stroke-[1.5px]"
                  :class="open && 'rotate-180 transform'"
                />
              </DisclosureButton>

              <DisclosurePanel
                class="Panel flex w-full items-center justify-between pt-4 text-[13px] font-medium leading-6"
              >
                <h5 class="text-netral-900">Email</h5>
                <p class="text-netral-800">justan.example@gmail.com</p>
              </DisclosurePanel>
            </Disclosure>
          </div>
        </div>
      </section>
    </div>
  </Layout>
</template>
