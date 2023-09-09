<script lang="ts" setup>
import { login } from "@/api/auth";

const emit = defineEmits(["updateVisible", "update:modelValue"]);
const props = defineProps(["modelValue"]);

interface Form {
    email: string;
    password: string;
}
const form = reactive<Form>({
    email: "",
    password: "",
});

async function handleLogin() {
    const { data } = await login(form);
    emit("update:modelValue", false);
    console.log("data", data.value);
}
</script>

<template>
    <el-dialog :model-value="modelValue" title="Вход в аккаунт" @closed="emit('update:modelValue', false)">
        <el-form :model="form">
            <el-form-item label="Email">
                <el-input v-model="form.email" autocomplete="off" />
            </el-form-item>
            <el-form-item label="Пароль">
                <el-input v-model="form.password" autocomplete="off" />
            </el-form-item>
        </el-form>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="emit('update:modelValue', false)">Отмена</el-button>
                <el-button type="primary" @click="handleLogin">Войти</el-button>
            </span>
        </template>
    </el-dialog>
</template>

<style lang="scss" scoped></style>
