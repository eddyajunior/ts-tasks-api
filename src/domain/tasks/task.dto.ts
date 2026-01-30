type TaskDTO = CreateTaskDTO & {
    id: string;
    createdAt: string;
};

function createTask(input: CreateTaskDTO): TaskDTO {
    return { ...input, id: crypto.randomUUID(), createdAt: new Date().toISOString() };
} 