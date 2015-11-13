class TodosController < ApplicationController

def update

  @projects = Project.all
  #@todoFind = Todo.find(id: params[:id])
  @todoFind = Todo.find(params[:id])
  #working#@todoFind = Todo.where(params.permit(:id))

  if @todoFind.isCompleted?
    @todoFind.isCompleted = false
  else
    @todoFind.isCompleted = true
  end
  @todoFind.save
  redirect_to :root
end

def create
end

end
