<?php

namespace App\Livewire;

use Livewire\Component;
use WireElements\Pro\Components\Modal\Modal;

class UsersOverview extends Modal
{
    public function render()
    {
        return view('livewire.users-overview');
    }
}
