<template>
  <div class="quiz-composer">
    <div class="middle">
      <quiz-preview />

      <div class="quiz-detail-edit">
        <a-form :layout="formState.layout">
          <a-form-item label="Loại câu hỏi" name="region">
            <a-select
              v-model:value="currentQuizType"
              placeholder="Chọn loại câu hỏi"
              :disabled="quizIndex < 0"
              @change="onChangeQuizType"
            >
              <a-select-option
                :disabled="currentQuizType === 'MULTIPLE_CHOICE'"
                value="MULTIPLE_CHOICE"
              >
                Chọn 1 đáp án đúng</a-select-option
              >
              <a-select-option
                :disabled="currentQuizType === 'MULTIPLE_RESPONSE'"
                value="MULTIPLE_RESPONSE"
              >
                Chọn nhiều đáp án đúng</a-select-option
              >
              <a-select-option :disabled="currentQuizType === 'SHORT_ANSWER'" value="SHORT_ANSWER">
                Điền từ vào ô trống
              </a-select-option>
              <a-select-option :disabled="currentQuizType === 'LONG_ANSWER'" value="LONG_ANSWER"
                >Điền câu</a-select-option
              >
              <a-select-option
                :disabled="currentQuizType === 'FILL_IN_THE_BLANKS'"
                value="FILL_IN_THE_BLANKS"
                >Điền vào nhiều ô trống</a-select-option
              >
              <a-select-option
                :disabled="currentQuizType === 'SELECT_FROM_LISTS'"
                value="SELECT_FROM_LISTS"
                >Chọn từ đúng trong ô</a-select-option
              >
            </a-select>
          </a-form-item>
        </a-form>

        <hr />

        <multiple-choices v-if="currentQuizType === 'MULTIPLE_CHOICE'" />
      </div>

      <div class="meta-column">
        <a-form :layout="formState.layout">
          <a-form-item label="Tên bộ quiz">
            <a-input
              :maxlength="24"
              placeholder="VD: 文法練習C"
              :value="quizDeckName"
              @change="onChangeText($event.target.value)"
            />
          </a-form-item>

          <a-form-item label="Hướng dẫn">
            <a-textarea
              :maxlength="128"
              placeholder="Hướng dẫn làm quiz"
              :auto-size="{ minRows: 3, maxRows: 6 }"
              :value="quizDeckInstruction"
              @change="onChangeInstruction($event.target.value)"
            />
          </a-form-item>

          <div class="max-score">
            <a-input-number
              id="maximum-score"
              placeholder="Điểm tối đa"
              class="max-score-input"
              :min="1"
              :max="100"
            />
            <div class="lbl">Tối đa: 100</div>
          </div>
        </a-form>
      </div>
    </div>

    <quiz-list />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, UnwrapRef } from "vue";
import store from "@/store";
import MultipleChoices from "@/components/quiz-composer/multiple-choices/multiple-choices.vue";
import QuizList from "@/components/quiz-list/quiz-list.vue";
import QuizPreview from "@/components/quiz-preview/quiz-preview.vue";
import { QuizType } from "@/common/static-data";

interface FormState {
  layout: "horizontal" | "vertical" | "inline";
  name: string;
  instruction: string;
}

export default defineComponent({
  components: {
    MultipleChoices,
    QuizList,
    QuizPreview,
  },
  setup() {
    const formState: UnwrapRef<FormState> = reactive({
      layout: "vertical",
      name: "",
      instruction: "",
    });
    const formItemLayout = computed(() => {
      const { layout } = formState;
      return layout === "horizontal"
        ? {
            labelCol: { span: 4 },
            wrapperCol: { span: 14 },
          }
        : {};
    });
    const buttonItemLayout = computed(() => {
      const { layout } = formState;
      return layout === "horizontal"
        ? {
            wrapperCol: { span: 14, offset: 4 },
          }
        : {};
    });
    const quizDeckName = computed(() => {
      return store.state.composingQuizMeta.name;
    });
    const quizDeckInstruction = computed(() => {
      return store.state.composingQuizMeta.instruction;
    });
    const quizIndex = computed(() => {
      return store.state.composingQuizMeta.selectedIndex;
    });
    const currentQuizType = computed(() => {
      const target = store.state.composingQuizCollection[quizIndex.value]?.type;
      return target;
    });

    return {
      formState,
      formItemLayout,
      buttonItemLayout,
      quizDeckName,
      quizDeckInstruction,
      quizIndex,
      currentQuizType,
    };
  },
  methods: {
    onChangeText: function (newValue: string) {
      store.commit("changeQuizDeckName", newValue);
    },
    onChangeInstruction: function (newValue: string) {
      store.commit("changeQuizDeckInstruction", newValue);
    },
    onChangeQuizType: function (newType: QuizType) {
      store.commit("changeSingleQuizType", {
        index: this.quizIndex,
        newType,
      });
    },
  },
});
</script>

<style lang="stylus">
$column-width = 240px

.quiz-composer
  display flex
  flex-direction column
  height calc(100vh - 106px)
  overflow auto
  position relative

  .middle
    display flex

    .quiz-detail-edit
      padding 0 1rem
      padding-top 1rem
      width $column-width
      height 440px
      overflow scroll
      border-left 1px solid $color-gray-medium

    .meta-column
      padding 0 1rem
      padding-top 1rem
      width $column-width
      border-left 1px solid $color-gray-medium

      .max-score
        display flex
        align-items center
        width 100%
        .max-score-input
          flex-grow 2

        .lbl
          margin-left 0.6rem

  .bottom
    height 4rem
    border-top 1px solid $color-gray-medium
    margin-bottom 112px
</style>
