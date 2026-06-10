<script setup lang="ts">
import type { Post } from '~/openapi/types.gen'

/**
 * Demo page for nuxt-openapi-hyperfetch
 *
 * Shows list, get, create, update, delete using the generated composables.
 * The composables are auto-imported — no manual imports needed.
 */
definePageMeta({ layout: 'default' })

// ─── List posts (useFetch variant, SSR-friendly) ───
const { data: posts, pending, error, refresh } = useFetchListPosts({})

// ─── Get single post (useAsyncData variant, raw response) ───
const selectedId = ref<number | null>(null)
const { data: selectedPost, status } = useAsyncDataGetPostById(
  computed(() => ({ path: { postId: selectedId.value ?? 0 } })),
  { lazy: true, server: false },
)

// ─── Create post form ───
const newTitle = ref('')
const newBody = ref('')
const creating = ref(false)
const createdPost = ref<Post | null>(null)

async function handleCreate() {
  creating.value = true
  try {
    const result = await createPost({ body: { title: newTitle.value, body: newBody.value, userId: 1 } })
    createdPost.value = result.data
    newTitle.value = ''
    newBody.value = ''
    refresh()
  }
  finally { creating.value = false }
}

// ─── Update post ───
const updatingId = ref<number | null>(null)
const updateTitle = ref('')
const updateBody = ref('')
const updating = ref(false)

function startUpdate(post: Post) {
  updatingId.value = post.id ?? null
  updateTitle.value = post.title ?? ''
  updateBody.value = post.body ?? ''
}

async function handleUpdate() {
  if (!updatingId.value) return
  updating.value = true
  try {
    await updatePost({
      path: { postId: updatingId.value },
      body: { title: updateTitle.value, body: updateBody.value, userId: 1 },
    })
    updatingId.value = null
    refresh()
  }
  finally { updating.value = false }
}

// ─── Delete post ───
const deletingId = ref<number | null>(null)

async function handleDelete(id: number) {
  deletingId.value = id
  try {
    await deletePost({ path: { postId: id } })
    refresh()
  }
  finally { deletingId.value = null }
}

// ─── Connector (alternative to manual wiring) ───
// const { getAll, create, update, del } = usePostsConnector({}, {
//   onSuccess: () => getAll.load(),
// })
</script>

<template>
  <div class="mx-auto max-w-4xl px-4 py-8">
    <h1 class="mb-2 text-3xl font-bold">OpenAPI Demo — JSONPlaceholder</h1>
    <p class="mb-8 text-muted-foreground">
      Demo utilisant les composables générés par <code>nuxt-openapi-hyperfetch</code>.
    </p>

    <!-- Create Form -->
    <section class="mb-8 rounded-lg border p-6">
      <h2 class="mb-4 text-xl font-semibold">Créer un post</h2>
      <div class="flex flex-col gap-3 sm:flex-row">
        <input v-model="newTitle" placeholder="Titre" class="flex-1 rounded-md border px-3 py-2" />
        <input v-model="newBody" placeholder="Contenu" class="flex-1 rounded-md border px-3 py-2" />
        <UiButton :disabled="creating || !newTitle" @click="handleCreate">
          {{ creating ? 'Création...' : 'Créer' }}
        </UiButton>
      </div>
      <div v-if="createdPost" class="mt-3 text-sm text-green-600">
        ✅ Post #{{ createdPost.id }} créé : "{{ createdPost.title }}"
      </div>
    </section>

    <!-- Posts List -->
    <section>
      <div class="mb-4 flex items-center justify-between">
        <h2 class="text-xl font-semibold">Liste des posts</h2>
        <UiButton variant="outline" size="sm" @click="() => refresh()">
          Rafraîchir
        </UiButton>
      </div>

      <ClientOnly>
        <template #fallback>
          <div class="py-12 text-center text-muted-foreground">
            Chargement...
          </div>
        </template>
        <div v-if="pending" class="py-12 text-center text-muted-foreground">
          Chargement...
        </div>

        <div v-else-if="error" class="rounded-md border border-red-200 bg-red-50 p-4 text-red-700">
          Erreur : {{ error }}
        </div>

        <div v-else class="space-y-2">
          <div
            v-for="post in posts ?? []"
            :key="post.id"
            class="rounded-lg border p-4 transition-colors hover:bg-muted/50"
          >
            <div class="flex items-start justify-between gap-4">
              <div class="flex-1">
                <h3 class="font-medium">{{ post.title }}</h3>
                <p class="mt-1 text-sm text-muted-foreground">{{ post.body }}</p>
                <span class="mt-2 inline-block text-xs text-muted-foreground">
                  #{{ post.id }} — User {{ post.userId }}
                </span>
              </div>
              <div class="flex shrink-0 gap-1">
                <UiButton
                  variant="outline"
                  size="sm"
                  @click="startUpdate(post)"
                >
                  Modifier
                </UiButton>
                <UiButton
                  variant="destructive"
                  size="sm"
                  :disabled="deletingId === post.id"
                  @click="handleDelete(post.id!)"
                >
                  {{ deletingId === post.id ? '...' : 'Supprimer' }}
                </UiButton>
              </div>
            </div>

            <!-- Inline Update Form -->
            <div v-if="updatingId === post.id" class="mt-3 space-y-2 border-t pt-3">
              <input
                v-model="updateTitle"
                placeholder="Nouveau titre"
                class="w-full rounded-md border px-3 py-2"
              />
              <input
                v-model="updateBody"
                placeholder="Nouveau contenu"
                class="w-full rounded-md border px-3 py-2"
              />
              <div class="flex gap-2">
                <UiButton :disabled="updating" @click="handleUpdate">
                  {{ updating ? 'Mise à jour...' : 'Sauvegarder' }}
                </UiButton>
                <UiButton variant="outline" @click="updatingId = null">
                  Annuler
                </UiButton>
              </div>
            </div>
          </div>

          <div v-if="(posts ?? []).length === 0" class="py-8 text-center text-muted-foreground">
            Aucun post trouvé.
          </div>
        </div>
      </ClientOnly>
    </section>
  </div>
</template>
